/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from './validators';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import2 from '@angular/core/src/linker/view_utils';
import * as import3 from '@angular/core/src/linker/view';
export class Wrapper_RequiredValidator {
  context:import0.RequiredValidator;
  changed:boolean;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  constructor() {
    this.changed = false;
    this.context = new import0.RequiredValidator();
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
  }
  check_required(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import2.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this.changed = true;
      this.context.required = currValue;
      this._expr_0 = currValue;
    }
  }
  detectChangesInInputProps(view:import3.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    return changed;
  }
  detectChangesInHostProps(view:import3.AppView<any>,el:any,throwOnChange:boolean):void {
    const currVal_1:any = (this.context.required? '': (null as any));
    if (import2.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      view.renderer.setElementAttribute(el,'required',((currVal_1 == (null as any))? (null as any): currVal_1.toString()));
      this._expr_1 = currVal_1;
    }
  }
}
export class Wrapper_MinLengthValidator {
  context:import0.MinLengthValidator;
  changed:boolean;
  changes:{[key: string]:any};
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  constructor() {
    this.changed = false;
    this.changes = {};
    this.context = new import0.MinLengthValidator();
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
  }
  check_minlength(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import2.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this.changed = true;
      this.context.minlength = currValue;
      this.changes['minlength'] = new import1.SimpleChange(this._expr_0,currValue);
      this._expr_0 = currValue;
    }
  }
  detectChangesInInputProps(view:import3.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    if (!throwOnChange) { if (changed) {
      this.context.ngOnChanges(this.changes);
      this.changes = {};
    } }
    return changed;
  }
  detectChangesInHostProps(view:import3.AppView<any>,el:any,throwOnChange:boolean):void {
    const currVal_1:any = (this.context.minlength? this.context.minlength: (null as any));
    if (import2.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      view.renderer.setElementAttribute(el,'minlength',((currVal_1 == (null as any))? (null as any): currVal_1.toString()));
      this._expr_1 = currVal_1;
    }
  }
}
export class Wrapper_MaxLengthValidator {
  context:import0.MaxLengthValidator;
  changed:boolean;
  changes:{[key: string]:any};
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  constructor() {
    this.changed = false;
    this.changes = {};
    this.context = new import0.MaxLengthValidator();
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
  }
  check_maxlength(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import2.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this.changed = true;
      this.context.maxlength = currValue;
      this.changes['maxlength'] = new import1.SimpleChange(this._expr_0,currValue);
      this._expr_0 = currValue;
    }
  }
  detectChangesInInputProps(view:import3.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    if (!throwOnChange) { if (changed) {
      this.context.ngOnChanges(this.changes);
      this.changes = {};
    } }
    return changed;
  }
  detectChangesInHostProps(view:import3.AppView<any>,el:any,throwOnChange:boolean):void {
    const currVal_1:any = (this.context.maxlength? this.context.maxlength: (null as any));
    if (import2.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      view.renderer.setElementAttribute(el,'maxlength',((currVal_1 == (null as any))? (null as any): currVal_1.toString()));
      this._expr_1 = currVal_1;
    }
  }
}
export class Wrapper_PatternValidator {
  context:import0.PatternValidator;
  changed:boolean;
  changes:{[key: string]:any};
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  constructor() {
    this.changed = false;
    this.changes = {};
    this.context = new import0.PatternValidator();
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
  }
  check_pattern(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import2.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this.changed = true;
      this.context.pattern = currValue;
      this.changes['pattern'] = new import1.SimpleChange(this._expr_0,currValue);
      this._expr_0 = currValue;
    }
  }
  detectChangesInInputProps(view:import3.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    if (!throwOnChange) { if (changed) {
      this.context.ngOnChanges(this.changes);
      this.changes = {};
    } }
    return changed;
  }
  detectChangesInHostProps(view:import3.AppView<any>,el:any,throwOnChange:boolean):void {
    const currVal_1:any = (this.context.pattern? this.context.pattern: (null as any));
    if (import2.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      view.renderer.setElementAttribute(el,'pattern',((currVal_1 == (null as any))? (null as any): currVal_1.toString()));
      this._expr_1 = currVal_1;
    }
  }
}