// POOR IMAGE / VISUAL BOND — p5.js
// Mouse movement increases distortion. Click to release copies.
// Space freezes the image; S saves a frame.

const nodes = [];
const packets = [];
const echoes = [];
let lowRes;
let frozen = false;
let seed = 1710;
let pulse = 0;
let userDegradation = 0.42;
let densityTarget = 64;
let resolutionBias = 0;
let displayMode = 0;
let tearX = 0;
let touchActive = false;
let touchX = 0;
let touchY = 0;
let touchPrevX = 0;
let touchPrevY = 0;

function setup() {
  const canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('canvas-wrap');
  installPointerInteraction();
  pixelDensity(1);
  frameRate(30);
  noCursor();
  lowRes = createGraphics(180, 120);
  lowRes.pixelDensity(1);
  rebuildNetwork();
  bindControls();
}

function bindControls() {
  const degradation = document.getElementById('degradation');
  const density = document.getElementById('density');
  const propagate = document.getElementById('propagate');
  const mode = document.getElementById('mode');
  const freezeButton = document.getElementById('freeze');

  degradation.addEventListener('input', e => userDegradation = Number(e.target.value) / 100);
  density.addEventListener('input', e => {
    densityTarget = Number(e.target.value);
    syncDensity();
  });
  propagate.addEventListener('click', () => propagateAt(width * 0.5, height * 0.5));
  mode.addEventListener('click', () => {
    displayMode = (displayMode + 1) % 3;
    mode.textContent = `MODE: ${['CONFLICT', 'POOR', 'RICH'][displayMode]}`;
  });
  freezeButton.addEventListener('click', toggleFreeze);
}

function syncDensity() {
  while (nodes.length < densityTarget) addNode(random(width), random(height));
  if (nodes.length > densityTarget) nodes.splice(densityTarget);
}

function addNode(x, y) {
  nodes.push({ x, y, vx: random(-1, 1), vy: random(-1, 1), phase: random(TWO_PI), class: random() > 0.88 ? 1 : 0 });
}

function rebuildNetwork() {
  randomSeed(seed);
  nodes.length = 0;
  const count = constrain(floor((width * height) / 18000), 32, 90);
  for (let i = 0; i < count; i++) {
    nodes.push({
      x: random(width), y: random(height),
      vx: random(-0.4, 0.4), vy: random(-0.4, 0.4),
      phase: random(TWO_PI), class: random() > 0.84 ? 1 : 0
    });
  }
}

function draw() {
  const inputX = touchActive ? touchX : mouseX;
  const inputY = touchActive ? touchY : mouseY;
  const previousX = touchActive ? touchPrevX : pmouseX;
  const previousY = touchActive ? touchPrevY : pmouseY;
  const motion = dist(inputX, inputY, previousX, previousY);
  const distortion = constrain(userDegradation * 0.72 + map(motion, 0, 70, 0.02, 0.55), 0.03, 1);
  const cycle = constrain((sin(frameCount * 0.012) + 1) * 0.5 + resolutionBias, 0, 1);
  pulse *= 0.93;

  background(7);
  drawSignalField(cycle, distortion);
  if ((mouseIsPressed || touchActive) && !isPointOnControls(inputX, inputY)) drawDraggedTear(distortion, inputX, inputY, previousX, previousY);
  drawNetwork(cycle, distortion);
  drawClassWindow(cycle, distortion);
  drawEchoes();
  drawPackets();
  drawCompressionArtifacts(distortion);
  drawCursor(inputX, inputY, touchActive);
  updateHUD(cycle, distortion);
  if (touchActive) { touchPrevX = touchX; touchPrevY = touchY; }
}

function isControlTarget() {
  const activeEvent = window.event;
  return Boolean(activeEvent && activeEvent.target && activeEvent.target.closest && activeEvent.target.closest('.controls'));
}

function isPointOnControls(x, y) {
  const target = document.elementFromPoint(x, y);
  return Boolean(target && target.closest && target.closest('.controls'));
}

function drawSignalField(cycle, distortion) {
  lowRes.background(12);
  lowRes.noStroke();
  const cols = 36;
  const rows = 24;
  const cw = lowRes.width / cols;
  const ch = lowRes.height / rows;

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const n = noise(x * 0.13, y * 0.13, frameCount * 0.015);
      const wave = sin(x * 0.46 + frameCount * 0.06 + y * 0.17);
      const threshold = 0.54 + wave * 0.12 - distortion * 0.12;
      const v = n > threshold ? 220 : n > threshold - 0.12 ? 82 : 15;
      lowRes.fill(v);
      lowRes.rect(x * cw, y * ch, cw + 1, ch + 1);
    }
  }

  // A barely legible eye/camera becomes the image being degraded.
  lowRes.push();
  lowRes.translate(lowRes.width * 0.64, lowRes.height * 0.54);
  lowRes.noFill();
  lowRes.stroke(235);
  lowRes.strokeWeight(1);
  lowRes.ellipse(0, 0, 64, 35);
  lowRes.fill(cycle > 0.5 ? 235 : 20);
  lowRes.circle(0, 0, 12 + cycle * 10);
  lowRes.pop();

  noSmooth();
  tint(displayMode === 2 ? 255 : 255, displayMode === 1 ? 235 : 95 + distortion * 90);
  image(lowRes, 0, 0, width, height);
  noTint();
}

function drawNetwork(cycle, distortion) {
  strokeWeight(0.7);
  for (let i = 0; i < nodes.length; i++) {
    const a = nodes[i];
    if (!frozen) {
      a.x += a.vx + sin(frameCount * 0.01 + a.phase) * 0.18;
      a.y += a.vy + cos(frameCount * 0.013 + a.phase) * 0.18;
      if (a.x < -10) a.x = width + 10;
      if (a.x > width + 10) a.x = -10;
      if (a.y < -10) a.y = height + 10;
      if (a.y > height + 10) a.y = -10;
    }

    for (let j = i + 1; j < nodes.length; j++) {
      const b = nodes[j];
      const d = dist(a.x, a.y, b.x, b.y);
      const reach = 85 + cycle * 55 + pulse * 80;
      if (d < reach) {
        stroke(235, map(d, 0, reach, 62, 2));
        line(a.x, a.y, b.x, b.y);
        if (random() < 0.002 + distortion * 0.003) {
          packets.push({ a, b, t: 0, speed: random(0.012, 0.035) });
        }
      }
    }
    noStroke();
    fill(a.class ? 245 : 165, a.class ? 240 : 140);
    const s = a.class ? 6 + cycle * 5 : 1.5 + distortion * 2.5;
    a.class ? rect(a.x - s / 2, a.y - s / 2, s, s) : circle(a.x, a.y, s);
  }
}

function drawClassWindow(cycle, distortion) {
  if (displayMode === 1) return;
  const w = displayMode === 2 ? min(width * 0.62, 760) : min(width * 0.29, 390);
  const h = min(height * 0.31, 255);
  const x = width - w - 18;
  const y = height - h - 60;
  const glitch = distortion * 18;

  push();
  drawingContext.save();
  drawingContext.beginPath();
  drawingContext.rect(x, y, w, h);
  drawingContext.clip();
  fill(232);
  noStroke();
  rect(x, y, w, h);
  stroke(15, 160);
  strokeWeight(1);
  const step = lerp(5, 18, cycle);
  for (let yy = y; yy < y + h; yy += step) {
    const off = random(-glitch, glitch);
    line(x + off, yy, x + w + off, yy);
  }
  noStroke();
  fill(8);
  textFont('monospace');
  textSize(10);
  textAlign(LEFT, TOP);
  text('RICH IMAGE / 4K / CONTROLLED ACCESS', x + 10, y + 10);
  textSize(42);
  textStyle(BOLD);
  text('HI—RES', x + 10 + random(-glitch, glitch), y + h - 58);
  drawingContext.restore();
  pop();

  noFill();
  stroke(235, 150);
  rect(x, y, w, h);
  fill(235);
  noStroke();
  textFont('monospace');
  textSize(9);
  textStyle(NORMAL);
  textAlign(RIGHT, BOTTOM);
  text('CLASS SOCIETY OF APPEARANCES', x + w - 8, y - 6);
}

function drawDraggedTear(distortion, x = mouseX, y = mouseY, previousX = pmouseX, previousY = pmouseY) {
  const speed = abs(x - previousX) + abs(y - previousY);
  if (speed < 2) return;
  tearX = lerp(tearX, x - previousX, 0.35);
  const stripH = constrain(8 + speed * 1.8, 10, 80);
  const sourceY = constrain(y - stripH / 2, 0, height - stripH);
  const shift = constrain(tearX * 4, -width * .3, width * .3);
  copy(0, sourceY, width, stripH, shift, sourceY + random(-4, 4), width, stripH);
  noStroke();
  fill(245, 45 + distortion * 80);
  rect(0, sourceY, abs(shift), random(1, stripH));
}

function drawCompressionArtifacts(distortion) {
  if (random() < 0.18 + distortion * 0.28) {
    noStroke();
    const bands = floor(random(1, 6));
    for (let i = 0; i < bands; i++) {
      const y = random(height);
      const h = random(1, 9 + distortion * 28);
      fill(random() > 0.5 ? 235 : 5, random(25, 95));
      rect(random(-30, width * 0.45), y, random(width * 0.12, width * 0.72), h);
    }
  }

  stroke(235, 35);
  strokeWeight(1);
  for (let y = 0; y < height; y += 4) line(0, y, width, y);
}

function drawPackets() {
  noStroke();
  for (let i = packets.length - 1; i >= 0; i--) {
    const p = packets[i];
    p.t += p.speed;
    const x = lerp(p.a.x, p.b.x, p.t);
    const y = lerp(p.a.y, p.b.y, p.t);
    fill(245, 220);
    rect(x - 2, y - 2, 4, 4);
    if (p.t >= 1) packets.splice(i, 1);
  }
  if (packets.length > 160) packets.splice(0, packets.length - 160);
}

function drawEchoes() {
  for (let i = echoes.length - 1; i >= 0; i--) {
    const e = echoes[i];
    e.life -= 2.2;
    e.r += e.speed;
    noFill();
    stroke(245, e.life);
    strokeWeight(e.life / 70);
    rectMode(CENTER);
    rect(e.x + random(-3, 3), e.y, e.r * 1.6, e.r);
    rectMode(CORNER);
    if (random() < 0.12 && nodes.length < 120) {
      nodes.push({ x: e.x + random(-e.r, e.r), y: e.y + random(-e.r, e.r), vx: random(-1, 1), vy: random(-1, 1), phase: random(TWO_PI), class: 0 });
    }
    if (e.life <= 0) echoes.splice(i, 1);
  }
}

function drawCursor(x = mouseX, y = mouseY, isTouch = false) {
  push();
  translate(x, y);
  noFill();
  stroke(245, 210);
  strokeWeight(1);
  circle(0, 0, (isTouch ? 38 : 24) + pulse * 24);
  line(-18, 0, 18, 0);
  line(0, -18, 0, 18);
  pop();
}

function updateHUD(cycle, distortion) {
  const res = floor(12 + cycle * 66 - distortion * 9);
  document.getElementById('resolution-value').textContent = nf(res, 2) + '%';
  document.getElementById('circulation-value').textContent = nf(100 - res, 2) + '%';
  document.getElementById('status').textContent = frozen ? 'SIGNAL: FROZEN' : distortion > 0.6 ? 'SIGNAL: CORRUPTED' : 'SIGNAL: UNSTABLE';
}

function mousePressed() {
  if (!isControlTarget()) propagateAt(mouseX, mouseY);
}

function propagateAt(x, y) {
  pulse = 1;
  for (let i = 0; i < 5; i++) echoes.push({ x, y, r: i * 12, speed: 3 + i, life: 220 - i * 22 });
  for (let i = 0; i < 8; i++) addNode(x + random(-45, 45), y + random(-45, 45));
  densityTarget = constrain(nodes.length, 20, 120);
  document.getElementById('density').value = densityTarget;
}

function mouseWheel(e) {
  resolutionBias = constrain(resolutionBias - e.delta * 0.0005, -0.45, 0.45);
  userDegradation = constrain(userDegradation - e.delta * 0.00045, 0, 1);
  document.getElementById('degradation').value = floor(userDegradation * 100);
  return false;
}

function touchStarted() {
  if (!touches.length) return false;
  touchActive = true;
  touchX = touchPrevX = touches[0].x;
  touchY = touchPrevY = touches[0].y;
  if (!isPointOnControls(touchX, touchY)) propagateAt(touchX, touchY);
  return false;
}

function touchMoved() {
  if (!touches.length) return false;
  touchPrevX = touchX;
  touchPrevY = touchY;
  touchX = touches[0].x;
  touchY = touches[0].y;
  touchActive = true;
  pulse = min(1, pulse + 0.08);
  return false;
}

function touchEnded() {
  touchActive = false;
  return false;
}

function installPointerInteraction() {
  let pointerDown = false;
  const blocked = event => event.target.closest('.controls, button, input, label, a');
  document.addEventListener('pointerdown', event => {
    if (blocked(event) || event.pointerType === 'mouse') return;
    pointerDown = touchActive = true;
    touchX = touchPrevX = event.clientX;
    touchY = touchPrevY = event.clientY;
    propagateAt(touchX, touchY);
    event.preventDefault();
  }, { passive: false, capture: true });
  document.addEventListener('pointermove', event => {
    if (!pointerDown || event.pointerType === 'mouse') return;
    touchPrevX = touchX; touchPrevY = touchY;
    touchX = event.clientX; touchY = event.clientY;
    distortionTarget = constrain(distortionTarget + dist(touchX, touchY, touchPrevX, touchPrevY) * 0.002, 0, 1);
    pulse = min(1, pulse + 0.08);
    event.preventDefault();
  }, { passive: false, capture: true });
  const finish = event => {
    if (!pointerDown) return;
    pointerDown = touchActive = false;
    if (event) event.preventDefault();
  };
  document.addEventListener('pointerup', finish, { passive: false, capture: true });
  document.addEventListener('pointercancel', finish, { passive: false, capture: true });
}

function keyPressed() {
  if (key === ' ') toggleFreeze();
  if (key === 's' || key === 'S') saveCanvas('poor-image-frame', 'png');
}

function toggleFreeze() {
  frozen = !frozen;
  document.getElementById('freeze').textContent = frozen ? 'RESUME' : 'FREEZE';
  frozen ? noLoop() : loop();
  if (frozen) updateHUD(0.5, userDegradation);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  rebuildNetwork();
}
