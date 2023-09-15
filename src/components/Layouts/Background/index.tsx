import React, { useEffect, useRef } from 'react'

import styles from './style.module.scss'

export const Background = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    const isPc = document.body.clientWidth > 600
    const cols = Math.floor(document.body.clientWidth / (isPc ? 24 : 2))
    const rows = Math.floor(document.body.clientHeight / 24) + 1

    const colors = [40, 35, 30, 25, 20, 15]

    canvas.width = document.body.clientWidth
    canvas.height = document.body.clientHeight

    // 背景を黒に設定
    context.fillStyle = 'rgb(0, 0, 0)'
    context.fillRect(0, 0, canvas.width, canvas.height)

    function drawTriangle(x, y, color, inverted = false) {
      context.beginPath()
      context.moveTo(x, y)
      context.lineTo(inverted ? x - 22 : x + 22, y + 11)
      context.lineTo(x, y + 22)
      context.fillStyle = `rgb(${color},${color},${color})`
      context.fill()
      context.closePath()
    }

    function getColor() {
      return colors[Math.floor(Math.random() * 6)]
    }

    function drawBackground() {
      let eq = null
      let x = cols
      let destY = 0
      let y

      while (x--) {
        eq = x % 2
        y = rows

        while (y--) {
          destY = Math.round((y - 0.5) * 24)
          drawTriangle(x * 24 + 2, eq === 1 ? destY : y * 24, getColor())
          drawTriangle(x * 24, eq === 1 ? destY : y * 24, getColor(), true)
        }
      }
    }

    function animate() {
      const x = Math.floor(Math.random() * cols)
      const y = Math.floor(Math.random() * rows)
      const eq = x % 2

      if (eq === 1) {
        drawTriangle(x * 24, Math.round((y - 0.5) * 24), getColor(), true)
      } else {
        drawTriangle(x * 24 + 2, y * 24, getColor())
      }

      requestAnimationFrame(animate)
    }

    drawBackground()
    animate()

    return () => {
      // アニメーションを停止するためのクリーンアップ処理
      const canvas = canvasRef.current
      if (canvas) {
        const context = canvas.getContext('2d')
        context.clearRect(0, 0, canvas.width, canvas.height)
      }
    }
  }, [])

  return (
    <div className={styles.background}>
      <canvas ref={canvasRef} id="canvas" className={styles.canvas}></canvas>
    </div>
  )
}
