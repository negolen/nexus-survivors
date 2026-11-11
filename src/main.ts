import './style.css';
import { GameEngine } from './game/GameEngine';
import { MonetizationManager } from './sdk/MonetizationManager';
import { UIManager } from './ui/UIManager';

window.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('game-canvas') as HTMLCanvasElement | null;
  if (!canvas) {
    throw new Error('Missing #game-canvas element');
  }

  const engine = new GameEngine(canvas);
  const sdk = MonetizationManager.getInstance();

  sdk.bindEngineCallbacks(
    () => engine.setSdkPause(true),
    () => engine.setSdkPause(false)
  );

  new UIManager(engine);
});
