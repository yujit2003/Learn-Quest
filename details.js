let bdata = JSON.parse(window.localStorage.getItem('bdata'));
console.log("bdata:",bdata);
let idata = JSON.parse(window.localStorage.getItem('idata'));
console.log("idata:",idata);
let adata = JSON.parse(window.localStorage.getItem('adata'));
console.log("adata:",adata);

setTimeout(() => {
    if (bdata != "") {
      for (let i = 0; i < bdata.length; i++) {
        if (bdata[i].type == "docs") {

          beginnerResourceBox.innerHTML += ` 
          <div class="col-6 col-md-4">
          <div class="card m-3" style="width: 100%">
          <img
          src="./assets/images/explore.jpg"
          class="card-img-top img-sz mx-auto"
          alt="..."
          />
          <div class="card-body text-center">
          <h5 class="card-title">${bdata[i].title}</h5>
          <a href="${bdata[i].link}" class="btn view-more-btn" target="_blank">View More</a>
          </div>
          </div>
          </div>`;
                  } else {
                      beginnerResourceBox.innerHTML += `
          <div class="col-6 col-md-4">
          <div class="card m-3" style="width: 100%">
          <img
          src="./assets/images/content.png"
          class="card-img-top img-sz mx-auto"
          alt="..."
          />
          <div class="card-body text-center">
          <h5 class="card-title">${bdata[i].title}</h5>
          <a href="${bdata[i].link}" class="btn view-more-btn" target="_blank">View More</a>
          </div>
          </div>
          </div>`;
                  }
              }
          } else {
              beginnerResourceBox.innerHTML += `<img
              src="./assets/images/empty.jpg"
              class="card-img-top img-sz mx-auto"
              alt="..."
            />`;
          }
          /* Intermediate Resource Box */

          if (idata != '') {
              for (let i = 0; i < idata.length; i++) {
                  if (idata[i].type == 'docs') {
                      intermediateResourceBox.innerHTML += `
            <div class="col-6 col-md-4">
            <div class="card m-3" style="width: 100%">
            <img
            src="./assets/images/explore.jpg"
            class="card-img-top img-sz mx-auto"
            alt="..."
            />
            <div class="card-body text-center">
            <h5 class="card-title">${idata[i].title}</h5>
            <a href="${idata[i].link}" class="btn view-more-btn" target="_blank">View More</a>
            </div>
            </div>
            </div>`;
                  } else {
                      intermediateResourceBox.innerHTML += `
          <div class="col-6 col-md-4">
          <div class="card m-3" style="width: 100%">
          <img
          src="./assets/images/content.png"
          class="card-img-top img-sz mx-auto"
          alt="..."
          />
          <div class="card-body text-center">
          <h5 class="card-title">${idata[i].title}</h5>
          <a href="${idata[i].link}" class="btn view-more-btn" target="_blank">View More</a>
          </div>
          </div>
          </div>`;
                  }
              }
          } else {
              intermediateResourceBox.innerHTML += `<img
              src="./assets/images/empty.jpg"
              class="card-img-top img-sz mx-auto"
              alt="..."
            />`;
          }
          /* Advanced Resource Box */
          if (adata != '') {
              for (let i = 0; i < adata.length; i++) {
                  if (adata[i].type == 'docs') {
                      advancedResourceBox.innerHTML += `
          <div class="col-6 col-md-4">
          <div class="card m-3" style="width: 100%">
          <img
          src="./assets/images/explore.jpg"
          class="card-img-top img-sz mx-auto"
          alt="..."
          />
          <div class="card-body text-center">
          <h5 class="card-title">${adata[i].title}</h5>
          <a href="${adata[i].link}" class="btn view-more-btn" target="_blank">View More</a>
          </div>
          </div>
          </div>`;
                  } else {
                      advancedResourceBox.innerHTML += `
          <div class="col-6 col-md-4">
          <div class="card m-3" style="width: 100%">
          <img
          src="./assets/images/content.png"
          class="card-img-top img-sz mx-auto"
          alt="..."
          />
          <div class="card-body text-center">
          <h5 class="card-title">${adata[i].title}</h5>
          <a href="${adata[i].link}" class="btn view-more-btn" target="_blank">View More</a>
          </div>
          </div>
          </div>`;
                  }
              }
          } else {
              advancedResourceBox.innerHTML += `<img
              src="./assets/images/empty.jpg"
              class="card-img-top img-sz mx-auto"
              alt="..."
            />`;
          }
      }, 300);