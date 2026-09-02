/* A Soft Refusal — p5.js generative animation. No assets required. */
const DUR=[12,14,14,13,12,17],TOTAL=DUR.reduce((a,b)=>a+b,0);
const STATES=[['fragile clarity','Before the image learns what you want, it can still tremble without purpose.'],['attraction / capture','Attention bends toward whatever glows. The glow begins to bend back.'],['the loop remembers','Image becomes view. View becomes data. Data returns disguised as desire.'],['loss of outline','Copied enough times, the image survives by becoming less itself.'],['a necessary friction','Do not feed the current. Hold still. Let the machine encounter a pause.'],['agency, slowly','Not escape—an interval. Enough room to choose the next gesture.']];
let motes=[],echoes=[],started,paused=false,soundOn=false,audio,master,pad=[],noiseNode,pulseTimer,lastMove=0,stillness=0,prevState=-1,currentState=0;
function setup(){createCanvas(windowWidth,windowHeight);pixelDensity(1);colorMode(RGB,255,255,255,255);started=millis();for(let i=0;i<180;i++)motes.push(new Mote());bindUI();createSoundGate();installPointerInteraction()}
function windowResized(){resizeCanvas(windowWidth,windowHeight)}
function bindUI(){select('#pause').mousePressed(()=>{paused=!paused;paused?noLoop():loop();select('#pause').html(paused?'▶':'Ⅱ')});select('#restart').mousePressed(()=>{started=millis();echoes=[];stillness=0;loop()});select('#sound').mousePressed(()=>{soundOn=!soundOn;select('#sound').style('color',soundOn?'#e8ff8a':'#f4f0e8');soundOn?startMusic():stopMusic()})}
function createSoundGate(){let gate=createDiv().id('soundGate').class('sound-gate'),button=createButton('<span class="ring">♪</span><strong>enter with sound</strong><small>headphones recommended</small>').class('enter');button.parent(gate);button.mousePressed(()=>{soundOn=true;startMusic();select('#sound').style('color','#e8ff8a');gate.addClass('hidden');setTimeout(()=>gate.remove(),1300)})}
function timeline(){let sec=((millis()-started)/1000)%TOTAL,acc=0;for(let i=0;i<DUR.length;i++){if(sec<acc+DUR[i])return[i,(sec-acc)/DUR[i],sec/TOTAL];acc+=DUR[i]}return[5,1,1]}
function draw(){const[s,t,all]=timeline(),motion=min(1,dist(mouseX,mouseY,pmouseX,pmouseY)/25);currentState=s;if(motion>.08)lastMove=millis();stillness=constrain((millis()-lastMove-600)/4200,0,1);if(s!==prevState){select('#stage').html(STATES[s][0]);select('#copy').html(STATES[s][1]);select('#n').html(String(s+1).padStart(2,'0'));prevState=s}select('#bar').style('width',(all*100)+'%');select('#hint').html(s===4?'hold still · the pause is yours':s===5?'move gently · choose the next gesture':'move to disturb · hold still to remember');let bg=s<2?lerpColor(color('#07080c'),color('#110e19'),t):s<4?color('#08070c'):lerpColor(color('#08070c'),color('#101611'),s===5?t*.8:0);background(bg);drawField(s,t,motion);drawPulse(s,t);if(s>=2&&s<=4)drawFeed(s,t);if(s===3)pixelBreak(t);if(s===4)drawFriction(t);if(s===5)drawRecovery(t);vignette();if(soundOn)updateMusic(s,t)}
function drawField(s,t,motion){blendMode(ADD);for(const m of motes)m.run(s,t,motion);blendMode(BLEND);if(s>=1&&frameCount%max(2,9-s*2)===0)echoes.push({x:mouseX||width/2,y:mouseY||height/2,r:4,a:100});noFill();for(const e of echoes){stroke(s>=3?255:229,s>=3?77:92,s>=3?109:120,e.a);circle(e.x,e.y,e.r);e.r+=s>=2?8:3;e.a-=s>=2?5:2}echoes=echoes.filter(e=>e.a>0)}
function drawPulse(s,t){const cx=width*.5,cy=height*.48,capture=s===1?ease(t):s>1&&s<5?1:0,tx=lerp(cx,mouseX||cx,capture*.35),ty=lerp(cy,mouseY||cy,capture*.35);push();translate(tx,ty);const beat=1+sin(millis()*.0024)*.045;blendMode(ADD);noStroke();for(let i=9;i>0;i--){let chaos=s===3?random(-18,18)*t:0;fill(s<2?210:245,s<2?238:80,s<2?255:120,5+i*2);circle(chaos,chaos,beat*(55+i*14)*(s===3?1+t*.7:1))}fill(244,240,232,s===3?90:220);circle(0,0,16*beat);pop()}
function drawFeed(s,t){push();rectMode(CENTER);noFill();let count=s===2?floor(lerp(4,28,t)):s===3?36:floor(lerp(36,4,t));for(let i=0;i<count;i++){let y=((i*71+millis()*(s===2?.12:.3))%(height+180))-90,x=width*.5+sin(i*12.7)*width*.36,w=lerp(28,110,noise(i));stroke(240,70,110,s===3?55:28);rect(x,y,w,w*.65,2);line(x-w*.42,y+w*.18,x+w*.42,y+w*.18)}pop()}
function pixelBreak(t){noStroke();const size=constrain(floor(lerp(5,34,t)),5,34);for(let y=0;y<height;y+=size)for(let x=0;x<width;x+=size)if(noise(x*.02,y*.02,frameCount*.025)>.66){let c=random()<.55?[247,55,102]:[80,210,255];fill(c[0],c[1],c[2],random(8,42));rect(x+random(-size,size),y,size*random(.4,2.8),size*.7)}}
function drawFriction(t){let p=max(t,stillness);push();stroke(232,255,138,lerp(15,180,p));strokeWeight(lerp(1,2,p));let x=lerp(width*.08,width*.5,p);line(x,height*.18,x,height*.78);noStroke();fill(232,255,138,120*p);textAlign(CENTER);textFont('monospace');textSize(10);text('STAY',x,height*.82);pop();if(stillness>.2){noStroke();fill(232,255,138,stillness*18);circle(width/2,height*.48,stillness*min(width,height)*.62)}}
function drawRecovery(t){let calm=max(t,stillness);push();translate(width/2,height*.48);noFill();for(let i=0;i<7;i++){stroke(232,255,138,lerp(5,70,calm)*(1-i/8));beginShape();for(let a=0;a<TWO_PI+.1;a+=.08){let r=45+i*18+noise(cos(a)+i,sin(a)+i,millis()*.00012)*20*(1-calm);vertex(cos(a)*r,sin(a)*r)}endShape(CLOSE)}pop()}
function vignette(){let g=drawingContext.createRadialGradient(width/2,height/2,0,width/2,height/2,max(width,height)*.7);g.addColorStop(.55,'rgba(0,0,0,0)');g.addColorStop(1,'rgba(0,0,0,.68)');drawingContext.fillStyle=g;drawingContext.fillRect(0,0,width,height)}function ease(x){return x*x*(3-2*x)}
function touchBurst(x,y,count=8){lastMove=millis();for(let i=0;i<count;i++)echoes.push({x:x+random(-12,12),y:y+random(-12,12),r:i*3,a:150-i*8});for(const m of motes){if(dist(m.x,m.y,x,y)<150){let a=atan2(m.y-y,m.x-x);m.x+=cos(a)*18;m.y+=sin(a)*18}}}
function touchStarted(){if(touches.length)touchBurst(touches[0].x,touches[0].y,12);return false}
function touchMoved(){if(touches.length&&frameCount%2===0)touchBurst(touches[0].x,touches[0].y,3);lastMove=millis();return false}
function touchEnded(){lastMove=millis();return false}
function installPointerInteraction(){
  let drawing=false,lastX=0,lastY=0;
  const blocked=e=>e.target.closest('button,.controls,.sound-gate');
  document.addEventListener('pointerdown',e=>{
    if(blocked(e)||e.pointerType==='mouse')return;
    drawing=true;lastX=e.clientX;lastY=e.clientY;touchBurst(lastX,lastY,14);e.preventDefault();
  },{passive:false,capture:true});
  document.addEventListener('pointermove',e=>{
    if(!drawing||e.pointerType==='mouse')return;
    const d=dist(e.clientX,e.clientY,lastX,lastY);
    if(d>5){touchBurst(e.clientX,e.clientY,5);lastX=e.clientX;lastY=e.clientY}
    e.preventDefault();
  },{passive:false,capture:true});
  document.addEventListener('pointerup',e=>{if(drawing){drawing=false;lastMove=millis();e.preventDefault()}},{passive:false,capture:true});
  document.addEventListener('pointercancel',()=>{drawing=false},{capture:true});
}
class Mote{constructor(){this.reset()}reset(){this.x=random(width);this.y=random(height);this.v=random(.15,.8);this.sz=random(1,3)}run(s,t,m){let cx=mouseX||width/2,cy=mouseY||height/2,ang=noise(this.x*.003,this.y*.003,millis()*.00008)*TAU*2;if(s===1||s===2)ang=lerp(ang,atan2(cy-this.y,cx-this.x),s===1?.035:.12);if(s===5)ang=lerp(ang,atan2(height*.48-this.y,width*.5-this.x),.025*t);this.x+=cos(ang)*this.v*(s>=2?3:1);this.y+=sin(ang)*this.v*(s>=2?3:1);if(this.x<0||this.x>width||this.y<0||this.y>height)this.reset();let alpha=s===3?random(8,80):s===5?lerp(15,95,t):35;stroke(s===5?232:130,s===5?255:190,s===5?138:220,alpha);strokeWeight(this.sz);point(this.x,this.y)}}
function startMusic(){
  if(audio){audio.resume();master.gain.setTargetAtTime(.32,audio.currentTime,.7);return}
  try{
    audio=new(window.AudioContext||window.webkitAudioContext)();master=audio.createGain();master.gain.value=.0001;master.connect(audio.destination);
    const chord=[55,82.41,110,164.81];
    chord.forEach((freq,i)=>{let o=audio.createOscillator(),g=audio.createGain(),f=audio.createBiquadFilter();o.type=i%2?'triangle':'sine';o.frequency.value=freq;o.detune.value=(i-1.5)*4;g.gain.value=[.10,.045,.035,.018][i];f.type='lowpass';f.frequency.value=420;o.connect(f).connect(g).connect(master);o.start();pad.push({o,g,f})});
    let buffer=audio.createBuffer(1,audio.sampleRate*2,audio.sampleRate),data=buffer.getChannelData(0);for(let i=0;i<data.length;i++)data[i]=(Math.random()*2-1)*.34;noiseNode=audio.createBufferSource();noiseNode.buffer=buffer;noiseNode.loop=true;let nf=audio.createBiquadFilter(),ng=audio.createGain();nf.type='bandpass';nf.frequency.value=900;nf.Q.value=.6;ng.gain.value=.012;noiseNode.connect(nf).connect(ng).connect(master);noiseNode._gain=ng;noiseNode._filter=nf;noiseNode.start();
    master.gain.exponentialRampToValueAtTime(.32,audio.currentTime+1.8);pulseTimer=setInterval(soundPulse,620);
  }catch(e){soundOn=false}
}
function soundPulse(){if(!audio||!soundOn||audio.state!=='running')return;let s=currentState,now=audio.currentTime;if(s===0||s===4)return;let o=audio.createOscillator(),g=audio.createGain(),f=audio.createBiquadFilter();o.type=s===3?'square':'sine';o.frequency.value=s===1?110:s===2?164.81:s===3?random([73.42,146.83,220]):s===5?82.41:98;f.type='lowpass';f.frequency.value=s===3?700:280;g.gain.setValueAtTime(.0001,now);g.gain.exponentialRampToValueAtTime(s===3?.12:.065,now+.018);g.gain.exponentialRampToValueAtTime(.0001,now+(s===5?.8:.24));o.connect(f).connect(g).connect(master);o.start(now);o.stop(now+1)}
function stopMusic(){if(!audio)return;master.gain.setTargetAtTime(.0001,audio.currentTime,.12);setTimeout(()=>audio&&audio.suspend(),500)}
function updateMusic(s,t){if(!audio||!master)return;let now=audio.currentTime,roots=[55,61.74,73.42,49,55,65.41],ratios=[1,1.5,2,3];pad.forEach((p,i)=>{p.o.frequency.setTargetAtTime(roots[s]*ratios[i],now,s===3?.08:1.8);p.f.frequency.setTargetAtTime(s===2?900:s===3?380:s===4?180:s===5?680:420,now,.8);p.g.gain.setTargetAtTime(s===4?[.05,.012,.006,.003][i]:[.10,.045,.035,.018][i],now,.8)});if(noiseNode){noiseNode._gain.gain.setTargetAtTime(s===3?.08:s===2?.032:s===4?.004:.012,now,.5);noiseNode._filter.frequency.setTargetAtTime(s===3?2200:s===4?260:900,now,.7)}}
