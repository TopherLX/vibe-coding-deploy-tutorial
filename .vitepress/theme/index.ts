import { h, ref, watch, onMounted, onBeforeUnmount, defineComponent } from 'vue'
import { useRoute } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './custom.css'

const signature = () =>
  h('div', { class: 'author-signature' }, [
    h('span', { class: 'signature-name' }, 'Lixian ZHANG'),
    h('span', { class: 'signature-divider' }, '·'),
    h('span', { class: 'signature-role' }, 'CTTQ'),
  ])

const Fireworks = defineComponent({
  setup() {
    const route = useRoute()
    const show = ref(false)

    let canvas: HTMLCanvasElement | null = null
    let ctx: CanvasRenderingContext2D | null = null
    let particles: any[] = []
    let raf = 0
    let running = false

    function random(min: number, max: number) { return Math.random() * (max - min) + min }

    function resize() {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    function createFirework(x: number, y: number) {
      const count = 80
      const hue = random(0, 360)
      for (let i = 0; i < count; i++) {
        const angle = random(0, Math.PI * 2)
        const speed = random(2, 8)
        particles.push({
          x, y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1,
          decay: random(0.008, 0.02),
          color: `hsl(${hue + random(-20, 20)}, 80%, 60%)`,
          size: random(1.5, 3.5),
        })
      }
    }

    function launch() {
      if (!canvas) return
      const x = random(canvas.width * 0.2, canvas.width * 0.8)
      const y = random(canvas.height * 0.2, canvas.height * 0.6)
      createFirework(x, y)
    }

    function animate() {
      if (!running || !ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles = particles.filter((p: any) => p.life > 0)
      particles.forEach((p: any) => {
        p.x += p.vx
        p.y += p.vy
        p.vy += 0.03
        p.life -= p.decay
        ctx!.globalAlpha = p.life
        ctx!.fillStyle = p.color
        ctx!.beginPath()
        ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx!.fill()
      })
      ctx.globalAlpha = 1
      raf = requestAnimationFrame(animate)
    }

    function start() {
      particles = []
      running = true
      show.value = true
      setTimeout(() => { for (let i = 0; i < 3; i++) launch() }, 300)
      setTimeout(() => { for (let i = 0; i < 5; i++) launch() }, 800)
      setTimeout(() => { for (let i = 0; i < 3; i++) launch() }, 1500)
      setTimeout(() => { for (let i = 0; i < 5; i++) launch() }, 2200)
      setTimeout(() => { for (let i = 0; i < 4; i++) launch() }, 3000)
      setTimeout(() => { running = false; show.value = false }, 5000)
      raf = requestAnimationFrame(animate)
    }

    function stop() {
      running = false
      show.value = false
      cancelAnimationFrame(raf)
      particles = []
    }

    watch(() => route.path, (path) => {
      if (typeof window === 'undefined') return
      if (path === '/deploy/conclusion' || path === '/deploy/conclusion.html') {
        setTimeout(start, 100)
      } else if (show.value) {
        stop()
      }
    }, { immediate: true })

    onBeforeUnmount(() => {
      stop()
      if (typeof window !== 'undefined') window.removeEventListener('resize', resize)
    })

    return () => show.value
      ? h('canvas', {
          ref: (el: any) => {
            if (el) {
              canvas = el as HTMLCanvasElement
              ctx = canvas.getContext('2d')
              resize()
              window.addEventListener('resize', resize)
            }
          },
          style: {
            position: 'fixed', top: '0', left: '0',
            width: '100%', height: '100%',
            pointerEvents: 'none', zIndex: '9999',
          },
        })
      : null
  },
})

const InstallerDropdown = defineComponent({
  setup() {
    const open = ref(false)
    const copied = ref(false)
    const btnRef = ref<HTMLElement | null>(null)
    const containerRef = ref<HTMLElement | null>(null)
    let timer = 0

    function toggle() {
      open.value = !open.value
    }

    function copy(link: string) {
      navigator.clipboard.writeText(link).then(() => {
        open.value = false
        copied.value = true
        clearTimeout(timer)
        timer = window.setTimeout(() => copied.value = false, 2000)
      }).catch(() => {
        prompt('复制链接 (Ctrl+C):', link)
      })
    }

    function onBlur(e: FocusEvent) {
      // Close when focus leaves the dropdown
      const el = containerRef.value
      if (el && !el.contains(e.relatedTarget as Node)) {
        open.value = false
      }
    }

    return () =>
      h('div', {
        ref: containerRef,
        class: 'installer-dropdown',
        tabindex: -1,
        onFocusout: onBlur,
      }, [
        h('button', {
          ref: btnRef,
          class: 'installer-btn',
          onClick: toggle,
        }, [
          h('span', '安装包'),
          h('svg', {
            class: 'installer-chevron',
            width: 10, height: 10,
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            'stroke-width': 2,
            'stroke-linecap': 'round',
            'stroke-linejoin': 'round',
          }, [
            h('polyline', { points: '6 9 12 15 18 9' }),
          ]),
        ]),
        h('div', { class: open.value ? 'installer-menu open' : 'installer-menu' }, [
          h('button', {
            class: 'installer-item',
            onClick: () => copy('链接：https://pan.quark.cn/s/14b9362b5cab?pwd=5ddS 提取码：5ddS'),
          }, [
            h('span', '夸克网盘'),
            h('svg', {
              width: 14, height: 14,
              viewBox: '0 0 24 24',
              fill: 'none',
              stroke: 'currentColor',
              'stroke-width': 2,
              'stroke-linecap': 'round',
              'stroke-linejoin': 'round',
            }, [
              h('rect', { x: 9, y: 9, width: 13, height: 13, rx: 2, ry: 2 }),
              h('path', { d: 'M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1' }),
            ]),
          ]),
          h('button', {
            class: 'installer-item',
            onClick: () => copy('链接：https://pan.baidu.com/s/1DOOZXjPQYvyxLSA2jAuRKA?pwd=sx57 提取码：sx57'),
          }, [
            h('span', '百度网盘'),
            h('svg', {
              width: 14, height: 14,
              viewBox: '0 0 24 24',
              fill: 'none',
              stroke: 'currentColor',
              'stroke-width': 2,
              'stroke-linecap': 'round',
              'stroke-linejoin': 'round',
            }, [
              h('rect', { x: 9, y: 9, width: 13, height: 13, rx: 2, ry: 2 }),
              h('path', { d: 'M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1' }),
            ]),
          ]),
        ]),
        h('span', { class: copied.value ? 'installer-toast show' : 'installer-toast' }, '已复制链接'),
      ])
  },
})

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-after': signature,
      'layout-top': () => h(Fireworks),
      'nav-bar-content-after': () => h(InstallerDropdown),
    })
  },
}
