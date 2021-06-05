import TeXToSVG from 'tex-to-svg';

//TODO : duration automation and clear

/**
 * TeX class
 *
 * @param    {String} - escaped TeX input
 * @param    {number} - x
 * @param    {number} - y
 * @param    {number} - width
 * @param    {number} - height
 *
 * @example
 *
 * example for playing animation of type 'appear' for TeX object:
 * ```js
 * let tex_1 = new TeX(
 *  '\\ce{Hg^2+ ->[I-] HgI2 ->[I-] [Hg^{II}I4]^2-}\\overrightarrow{F}_{12} = k_e \\frac{q_1 q_2}{r^2}',
 *   200,
 *   300,
 *   200,
 *   100
 * );
 * ```
 * @experimental
 */
export class TeX {
  writeTexElement: any;
  SVGEquation: any;
  //timeDuration: number; // left for later decision -> need not specify such details at initialisation
  x: number = 10;
  y: number = 10;
  width_svg: number;
  height_svg: number;
  sentence: string;
  _stroke: string;
  _strokeWidth: number;
  _fill: any;
  constructor(
    sentence: string,
    //timeDuration: number,
    x: number = 10,
    y: number = 10,
    width_svg: number = 300,
    height_svg: number = 300
  ) {
    //this.timeDuration = timeDuration;
    this.x = x;
    this.y = y;
    this.sentence = sentence;
    this.width_svg = width_svg;
    this.height_svg = height_svg;
    this.SVGEquation = TeXToSVG(sentence);
    this._stroke = 'black';
    this._strokeWidth = 10;
    this._fill = 'black';
  }

  // all_at_once(timeDuration: number) {

  // }

  // write(timeDuration: number) {

  // }

  // position and scaling methods
}
