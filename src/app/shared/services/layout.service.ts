import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  renderer:Renderer2;
  constructor(
    private rendererFactory:RendererFactory2
    ) {
      this.renderer = rendererFactory.createRenderer(null, null);
   }


  toggleIsloadingBlockUI(parms:{isLoading:boolean}){
    parms.isLoading ? this.renderer.addClass(document.body,'loading-block-ui') : this.renderer.removeClass(document.body,'loading-block-ui')
  }


}
