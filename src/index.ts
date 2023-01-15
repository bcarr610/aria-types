type T_socketEvents = {
  camera: {
    frame: string
    audio: string
  }
}

export const socketEvents: T_socketEvents = {
  camera: {
    frame: 'aria:camera:frame',
    audio: 'aria:camera:audio',
  },
}
