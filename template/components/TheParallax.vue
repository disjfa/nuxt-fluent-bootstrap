// out: ..
<template>
    <div style="position:relative; overflow: hidden; height: 40vmin;">
        <div :style="computedStyle">

        </div>
        <div style="position:relative; ">
            <slot></slot>
        </div>
    </div>
</template>

<script>
  export default {
    props: ['src'],
    data() {
      return {
        topPosition: false,
        top: 0,
      };
    },
    mounted() {
    //      this.loop();
    },
    methods: {
      loop() {
        if (window.pageYOffset === this.topPosition) {
          this.scroll(this.loop);
          return false;
        }
        this.topPosition = window.pageYOffset;
        const { top, height } = this.$el.getBoundingClientRect();
        const parallaxFactor = height / window.innerHeight;
        const parallaxShift = height * parallaxFactor;
        const parallaxImgPos = top - window.innerHeight;
        this.top = Math.round((parallaxImgPos - parallaxShift));

        this.top = top;
        console.log('top', this.top);
        this.scroll(this.loop);
      },
      scroll(callback) {
        return window.requestAnimationFrame(callback);
      },
    },
    computed: {
      computedStyle() {
        return {
          backgroundImage: `url(${this.src})`,
          backgroundSize: 'cover',
          height: '40vmin',
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          right: 0,
          transform: `translate3d(0, ${(0 - this.top) / 2}px, 0px) scale(1)`,
        };
      },
    },
  };
</script>