export interface DetectedObject {
  bbox: [number, number, number, number]
  class: string
  score: number
}

export type CameraFrame = {
  mimeType: string
  buffer: string
  timestamp: number
  camera: {
    width: number
    height: number
    fps: number
    host: string
    ip: string
    friendly_name: string
  }
  predictions: DetectedObject[]
}

export type CameraConfig = {
  width: number
  height: number
  framerate: number
}

export type ConfigDestination = {
  ssl: boolean
  host: string
  port: number | string
}
