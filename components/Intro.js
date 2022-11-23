import React, { useRef, useEffect } from 'react'
import styles from '../styles/Intro.module.css'
import anime from 'animejs/lib/anime.es.js';
import { FiChevronDown } from 'react-icons/fi'

const Intro = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')


        var numberOfParticules = 30;
        var pointerX = 0;
        var pointerY = 0;
        var tap = ('ontouchstart' in window || navigator.msMaxTouchPoints) ? 'touchstart' : 'mousedown';
        var colors = ['#F2F7F5', '#DBB0C1', '#EA4C5C', '#424368'];

        function setCanvasSize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;    
        canvas.style.width = window.innerWidth ;
        canvas.style.height = window.innerHeight ;
        canvas.getContext('2d');
        }

        function updateCoords(e) {
        pointerX = e.clientX || e.touches[0].clientX;
        pointerY = e.clientY || e.touches[0].clientY;
        }

        function setParticuleDirection(p) {
        var angle = anime.random(0, 360) * Math.PI / 180;
        var value = anime.random(50, 180);
        var radius = [-1, 1][anime.random(0, 1)] * value;
        return {
            x: p.x + radius * Math.cos(angle),
            y: p.y + radius * Math.sin(angle)
        }
        }

        function createParticule(x,y) {
        var p = {};
        p.x = x;
        p.y = y;
        p.color = colors[anime.random(0, colors.length - 1)];
        p.radius = anime.random(16, 32);
        p.endPos = setParticuleDirection(p);
        p.draw = function() {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
            ctx.fillStyle = p.color;
            ctx.fill();
        }
        return p;
        }

        function createCircle(x,y) {
        var p = {};
        p.x = x;
        p.y = y;
        p.color = '#FFF';
        p.radius = 0.1;
        p.alpha = .5;
        p.lineWidth = 6;
        p.draw = function() {
            ctx.globalAlpha = p.alpha;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
            ctx.lineWidth = p.lineWidth;
            ctx.strokeStyle = p.color;
            ctx.stroke();
            ctx.globalAlpha = 1;
        }
        return p;
        }

        function renderParticule(anim) {
        for (var i = 0; i < anim.animatables.length; i++) {
            anim.animatables[i].target.draw();
        }
        }

        function animateParticules(x, y) {
        var circle = createCircle(x, y);
        var particules = [];
        for (var i = 0; i < numberOfParticules; i++) {
            particules.push(createParticule(x, y));
        }
        anime.timeline().add({
            targets: particules,
            x: function(p) { return p.endPos.x; },
            y: function(p) { return p.endPos.y; },
            radius: 0.1,
            duration: anime.random(1200, 4000),
            easing: 'easeOutExpo',
            update: renderParticule
        })
            .add({
            targets: circle,
            radius: anime.random(80, 200),
            lineWidth: 0,
            alpha: {
            value: 0,
            easing: 'linear',
            duration: anime.random(600, 1500),  
            },
            duration: anime.random(1200, 3500),
            easing: 'easeOutExpo',
            update: renderParticule,
            offset: 0
        }); 
        }

        var render = anime({
        duration: Infinity,
        update: function() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
        });

        var bouncingChev = anime({
            targets: '.chev',
            translateY: '5px',
            duration: 300,
            loop: true,
            direction: 'alternate',
            easing: 'easeInCubic',
            scaleX: {
                value: 1.05,
                duration: 150,
                delay: 268
            }
        })

        document.addEventListener(tap, function(e) {
        window.human = true;
        render.play();
        updateCoords(e);
        animateParticules(pointerX, pointerY);
        }, false);

        var centerX = window.innerWidth / 2;
        var centerY = window.innerHeight / 2;

        function autoClick() {
        if (window.human) return;
        animateParticules(
            anime.random(centerX-50, centerX+50), 
            anime.random(centerY-50, centerY+50)
        );
        anime({duration: 1000}).finished.then(autoClick);
        }

        autoClick();
        setCanvasSize();
        window.addEventListener('resize', () => {
            setCanvasSize()
            autoClick()
        }, false);
                
          
    }, [])



    return (
        <div className={styles.canvasContainer}>
            <canvas ref={canvasRef} className={styles.canvas}></canvas>
            <div className={styles.introTitle}>
                <div className={styles.title}>
                    <div className={styles.word}>
                        <span>H</span>
                        <span>e</span>
                        <span>l</span>
                        <span>l</span>
                        <span>o</span>
                        <span>,</span>
                    </div>
                    <div className={styles.word}>
                        <span>I&apos;</span>
                        <span style={{marginRight: '10px'}}>m</span>
                        <span>T</span>
                        <span>i</span>
                        <span>e</span>
                        <span>l</span>
                        <span>o</span>
                        <span>r</span>
                    </div>
                    <div className={styles.word} style={{ color: '#3e7d80'}}>
                        <span>T</span>
                        <span>o</span>
                        <span>m</span>
                        <span>l</span>
                        <span>i</span>
                        <span>n</span>
                        <span>s</span>
                        <span>o</span>
                        <span>n</span>
                    </div>
                </div>
                <p>Front-end developer and problem solver</p>
            </div>
            <button type='button' className={styles.button}><a href='#projectLink'>See Projects</a><FiChevronDown className='chev' /></button>
        </div>
    )
}

export default Intro