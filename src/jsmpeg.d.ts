declare module 'jsmpeg' {
  interface Decoder {
    connect(destination: any): void;
    destroy(): void;
    seek(time: number): void;
    getCurrentTime(): number;
  }

  interface Source {
    connect(): void;
    start(): void;
    resume(secondsHeadroom: number): void;
    destroy(): void;
  }

  interface PlayerOptions {
    canvas?: HTMLCanvasElement;
    loop?: boolean;
    autoplay?: boolean;
    audio?: boolean;
    video?: boolean;
    poster?: string;
    pauseWhenHidden?: boolean;
    disableGl?: boolean;
    disableWebAssembly?: boolean;
    preserveDrawingBuffer: boolean;
    progressive?: boolean;
    throttled?: boolean;
    chunkSize?: number;
    decodeFirstFrame?: boolean;
    maxAudioLag?: number;
    videoBufferSize?: number;
    audioBufferSize?: number;
    onVideoDecode?: (decoder: any, time: number) => void;
    onAudioDecode?: (decoder: any, time: number) => void;
    onPlay?: (player: Player) => void;
    onPause?: (player: Player) => void;
    onEnded?: (player: Player) => void;
    onStalled?: (player: Player) => void;
    onSourceEstablished?: (source: Source) => void;
    onSourceCompleted?: (source: Source) => void;
  }
  class Player {
    constructor(url: string | WebSocket, options?: PlayerOptions);
    play(): void;
    pause(): void;
    stop(): void;
    nextFrame(): void;
    destroy(): void;
    volume: number;
    currentTime: number;
    paused: boolean;
  }

  interface JSMpeg {
    Player: Player;
  }

  export = JSMpeg;
}