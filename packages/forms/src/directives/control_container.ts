/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {AbstractControlDirective} from './abstract_control_directive';
import {Form} from './form_interface';


/**
 * A directive that contains multiple `NgControl`s.
 *
 * Only used by the forms module.
 *
 *
 */
export abstract class ControlContainer extends AbstractControlDirective {
  // TODO(issue/24571): remove '!'.
  name !: string;

  /**
   * Get the form to which this container belongs.
   */
  get formDirective(): Form|null { return null; }

  /**
   * Get the path to this container.
   */
  get path(): string[]|null { return null; }
}
