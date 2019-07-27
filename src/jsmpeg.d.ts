declare module 'jsmpeg' {
  export interface BitBuffer {}

  export interface Source {
    connect(destination: any): void;
    write(buffer: BitBuffer): void;
    start(): void;
    resume(secondsHeadroom: number): void;
    destroy(): void;
    established: boolean;
    completed: boolean;
    progress: number;
  }

  export interface Demuxer {
    connect(destination: any): void;
    write(buffer: BitBuffer): void;
    currentTime: number;
    startTime: number;
  }

  export interface Decoder {
    connect(destination: any): void;
    write(buffer: BitBuffer): void;
    decode(): void;
    seek(time: number): void;
    currentTime: number;
    startTime: number;
  }

  export interface PlayerOptions {
    canvas?: HTMLCanvasElement;
    loop?: boolean;
    autoplay?: boolean;
    audio?: boolean;
    video?: boolean;
    poster?: string;
    pauseWhenHidden?: boolean;
    disableGl?: boolean;
    disableWebAssembly?: boolean;
    preserveDrawingBuffer?: boolean;
    progressive?: boolean;
    throttled?: boolean;
    chunkSize?: number;
    decodeFirstFrame?: boolean;
    maxAudioLag?: number;
    videoBufferSize?: number;
    audioBufferSize?: number;
    onVideoDecode?: (decoder: Decoder, time: number) => void;
    onAudioDecode?: (decoder: Decoder, time: number) => void;
    onPlay?: (player: Player) => void;
    onPause?: (player: Player) => void;
    onEnded?: (player: Player) => void;
    onStalled?: (player: Player) => void;
    onSourceEstablished?: (source: Source) => void;
    onSourceCompleted?: (source: Source) => void;
  }

  export class Player {
    constructor(url: string | WebSocket, options?: PlayerOptions);
    play(): void;
    pause(): void;
    stop(): void;
    nextFrame(): void;
    destroy(): void;
    getVolume(): number;
    setVolume(volume: number): void;
    getCurrentTime(): number;
    setCurrentTime(time: number): void;
    volume: number;
    currentTime: number;
    paused: boolean;
  }

  // tslint:disable-next-line:function-name
  export function Now(): number;

  // tslint:disable-next-line:function-name
  export function Fill(array: any[], value: any): void;

  // tslint:disable-next-line:function-name
  export function Base64ToArrayBuffer(base64: string): ArrayBuffer;
}
