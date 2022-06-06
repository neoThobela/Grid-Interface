/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import { genericApi } from 'app/sd-services/genericApi'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-home',
  templateUrl: './home.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class homeComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_nlmi3FumCMPKap9D(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_nlmi3FumCMPKap9D(bh) {
    try {
      bh = this.sd_4XDlMGeNXgM8c09e(bh);
      //appendnew_next_sd_nlmi3FumCMPKap9D
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nlmi3FumCMPKap9D');
    }
  }

  getImageByCategory(category = '', ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { category: category };
      bh.local = {};
      bh = this.sd_xJKwSPJZ41xeMflw(bh);
      //appendnew_next_getImageByCategory
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DhFv3GrY0aMa77Jl');
    }
  }

  getAllImages(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_YnQ6ecxTqkq38cIM(bh);
      //appendnew_next_getAllImages
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_db9cyGMXMHdmBdwk');
    }
  }

  //appendnew_flow_homeComponent_start

  sd_4XDlMGeNXgM8c09e(bh) {
    try {
      this.page.allImage = [];
      this.page.sortedImages = [];
      this.page.selectedCategory = 'all';
      this.page.categoryButtons = [];
      this.page.ssdUrl = undefined;
      this.page.isLoading = false;
      bh = this.callGetAllImages(bh);
      //appendnew_next_sd_4XDlMGeNXgM8c09e
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4XDlMGeNXgM8c09e');
    }
  }

  callGetAllImages(bh) {
    try {
      let outputVariables = this.getAllImages();

      //appendnew_next_callGetAllImages
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_eP0xqmWdyCK0J1qP');
    }
  }

  sd_xJKwSPJZ41xeMflw(bh) {
    try {
      const page = this.page;
      page.selectedCategory = bh.input.category;

      page.sortedImages =
        bh.input.category === 'all'
          ? page.allImages
          : page.allImages.filter(
              (imgObj) => imgObj.category === bh.input.category
            );

      console.log('Sorted Images: ' + bh.input.category, page.sortedImages);
      //appendnew_next_sd_xJKwSPJZ41xeMflw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xJKwSPJZ41xeMflw');
    }
  }

  sd_YnQ6ecxTqkq38cIM(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_7EFnE9e7mVaCRwEb(bh);
      //appendnew_next_sd_YnQ6ecxTqkq38cIM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YnQ6ecxTqkq38cIM');
    }
  }

  sd_7EFnE9e7mVaCRwEb(bh) {
    try {
      const page = this.page;
      bh.input.url = page.ssdUrl + 'get-all-images';
      page.isLoading = true;
      bh = this.sd_3y4XRyxQgXQKJ62v(bh);
      //appendnew_next_sd_7EFnE9e7mVaCRwEb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7EFnE9e7mVaCRwEb');
    }
  }

  async sd_3y4XRyxQgXQKJ62v(bh) {
    try {
      const genericApiInstance: genericApi =
        this.__page_injector__.get(genericApi);

      let outputVariables = await genericApiInstance.getImages(bh.input.url);
      this.page.allImages = outputVariables.local.result;

      bh = this.sd_FQzqVzSH4qeWttMQ(bh);
      //appendnew_next_sd_3y4XRyxQgXQKJ62v
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_3y4XRyxQgXQKJ62v');
    }
  }

  sd_FQzqVzSH4qeWttMQ(bh) {
    try {
      const page = this.page;
      page.categoryButtons.push({
        name: 'All',
        id: 'all',
      });

      page.allImages.forEach((obj) => {
        let tempObj = {
          name: obj.name,
          id: obj.category,
        };
        // Check for duplicates
        if (
          page.categoryButtons.filter((item) => item.name === tempObj.name)
            .length < 1
        ) {
          page.categoryButtons.push(tempObj);
        }
      });

      page.isLoading = false;
      bh = this.sd_JIZwV69WDCwO7NJB(bh);
      //appendnew_next_sd_FQzqVzSH4qeWttMQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FQzqVzSH4qeWttMQ');
    }
  }

  sd_JIZwV69WDCwO7NJB(bh) {
    try {
      let outputVariables = this.getImageByCategory(this.page.selectedCategory);

      //appendnew_next_sd_JIZwV69WDCwO7NJB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JIZwV69WDCwO7NJB');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_homeComponent_Catch
}
