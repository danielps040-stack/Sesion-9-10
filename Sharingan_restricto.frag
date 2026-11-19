// Author: Daniel Pérez Sosa
// Title: Sharingan

precision mediump float;uniform vec2 u_resolution;uniform float u_time;void main(){vec2 p=(2.*gl_FragCoord.xy-u_resolution)/u_resolution.y;float d=length(p),a=atan(p.y,p.x),t=.7*u_time,c=step(d,.98);c*=1.-.2*(1.+sin(16.*d+6.*a-8.*t));c*=step(.13,d);for(int i=0;i<3;i++){float b=t+2.094*float(i);vec2 e=vec2(cos(b),sin(b)),n=vec2(-e.y,e.x),q=p-.55*e;if(length(q)<.07||length(q-.05*e+.04*n)<.05)c=0.;}gl_FragColor=vec4(c,0,0,1);}