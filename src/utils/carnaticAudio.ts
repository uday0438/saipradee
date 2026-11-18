/**
 * Wedding audio player for the romantic song "Anuvanuvuu".
 * Uses direct HTML5 Audio for high-fidelity playback.
 */
class WeddingAudioPlayer {
  private isPlaying = false;
  private audioEl: HTMLAudioElement | null = null;

  public async start(customMp3Url?: string): Promise<boolean> {
    if (this.isPlaying && this.audioEl) return true;

    const trackUrl = customMp3Url || '/music/anuvanuvuu.mp3';
    try {
      if (!this.audioEl) {
        this.audioEl = new Audio(trackUrl);
        this.audioEl.loop = true;
        this.audioEl.volume = 0.7;
      }
      await this.audioEl.play();
      this.isPlaying = true;
      return true;
    } catch (err) {
      console.warn('Audio play request blocked or pending user interaction:', err);
      return false;
    }
  }

  public stop() {
    this.isPlaying = false;
    if (this.audioEl) {
      this.audioEl.pause();
    }
  }

  public getPlayingState(): boolean {
    return this.isPlaying;
  }
}

export const weddingAudio = new WeddingAudioPlayer();
