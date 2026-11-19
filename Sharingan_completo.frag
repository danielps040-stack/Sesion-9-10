// Author: Daniel Pérez Sosa
// Title: Sharingan

precision mediump float;

uniform vec2 u_resolution;
uniform float u_time;

mat2 R(float a){
    float c=cos(a),s=sin(a);
    return mat2(c,-s,s,c);
}

void main(){

    vec2 p=(2.*gl_FragCoord.xy-u_resolution)
           /min(u_resolution.x,u_resolution.y);

    float r=length(p);
    float ang=atan(p.y,p.x);

    float vel=.50;

    vec3 c=vec3(0);


    // Sharingan rojo
    if(r<.96)
        c=vec3(.78,.01,.02);


    // Espiral de absorcion
    float espiral=
        .5+.5*sin(
            24.*r+
            6.*ang-
            6.*vel*u_time
        );

    // Zona interior
    float zonaInterior=
        smoothstep(.14,.25,r)*
        (1.-smoothstep(.75,.96,r));

    float vorticeInterior=
        smoothstep(.60,1.,espiral)*
        zonaInterior;

    c=mix(
        c,
        vec3(.27,0.,0.),
        vorticeInterior*.25
    );


    // Espiral exterior
    float zonaExterior=
        smoothstep(.82,.98,r)*
        (1.-smoothstep(1.15,1.40,r));

    float vorticeExterior=
        smoothstep(.68,1.,espiral)*
        zonaExterior;

    c+=
        vorticeExterior*
        vec3(.55,.015,0.)*
        .40;


    // Marcas de la orbita
    float marcas=
        step(.78,sin(48.*ang))*
        (1.-smoothstep(.025,.035,abs(r-.54)));

    if(r<.96)
        c=mix(
            c,
            vec3(.32,0.,0.),
            marcas*.40
        );


    // Pupila
    if(r<.13)
        c=vec3(0);


    // Tres tomoe
    for(int i=0;i<3;i++){

        float a=
            u_time*vel+
            6.28318*float(i)/3.;

        vec2 centro=
            .54*vec2(
                cos(a),
                sin(a)
            );

        vec2 q=
            R(-a)*(p-centro);

        float cabeza=
            step(length(q),.075);

        float x=q.x;

        float curva=
            -1.15*x+
            4.8*x*x;

        float cola=
            step(0.,x)*
            step(x,.16)*
            step(
                abs(q.y-curva),
                .055*(1.-x/.16)
            );

        if(max(cabeza,cola)>0.)
            c=vec3(0);
    }


    gl_FragColor=vec4(c,1);
}