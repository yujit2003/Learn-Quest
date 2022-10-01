/* Source Logic */
let selectCategoryBtn = document.querySelectorAll('.select-category-btn');
// Contribution and Resource Box
const resourceBox = document.getElementById('resourceBox');
const contributionGuidline = document.getElementById('contributionGuideline');
// Resource Showcase Section
const beginnerResourceBox = document.getElementById('beginnerResourceBox');
const intermediateResourceBox = document.getElementById(
	'intermediateResourceBox',
);
const advancedResourceBox = document.getElementById('advancedResourceBox');
const projectsResourceBox = document.getElementById('projectsResourceBox');
// const domains = ["web","web","web"];
const programming = ['c++', 'java', 'python', 'javascript', 'php'];
const programmingLength = programming.length;
const domains = [
  "c++",
  "java",
  "python",
  "javascript",
  "php",
  "frontend",
  "backend",
  "mern",
  "mean",
  "mevn",
  "ruby_on_rails",
  "android",
  "flutter",
  "ios",
  "react_native",
  "general",
  "illustrations",
  "motion",
  "photo",
  "sound",
  "ui-ux",
  "video",
  "ai",
  "computer_vision",
  "deep_learning",
  "machine_learning",
  "big_data",
  "statistics",
  "git",
  "data_structure_&_algorithm",
  "data_management",
  "blockchain",
  "ethical_hacking",
  "Game_dev",
  "robotics",
  "CyberSecurity",
  "linux"
];
let bres = '';
let bdata = '';
let ires = '';
let idata = '';
let ares = '';
let adata = '';
let pres = '';
let pdata = '';
// Contribution Btn
contributionBtn.addEventListener('click', (e) => {
	resourceBox.style.display = 'none';
	contributionGuidline.style.display = 'block';
	contributionBtn.style.backgroundColor = '#6940d3';
	contributionBtn.style.color = 'white';
	for (let j = 0; j < category.length; j++) {
		selectBtn[j].style.backgroundColor = 'white';
		selectBtn[j].style.color = 'black';
	}
	for (let i = 0; i < category.length; i++) {
		let x = category[i].querySelector('.select-option');
		x.style.display = 'none';
	}
});
// Select Category Btn
for (let i = 0; i < selectCategoryBtn.length; i++) {
	selectCategoryBtn[i].addEventListener('click', async (e) => {
		const value = selectCategoryBtn[i].value;
		console.log(value);
		console.log(domains[i]);
		if (
			value == 'Blockchain' ||
			value == 'ethical_hacking' ||
			value == 'Game_dev' ||
			value == 'robotics' ||
			value == 'CyberSecurity' ||
			value == 'data_structure_&_algorithm' ||
			value == 'database_management' ||
      value == 'git' ||
			value == 'api' ||
      value == 'linux'
		) {
			console.log('hello');
			/* beginner*/
			bres = await fetch(`./data/domains/${value}/beginner.json`);
			bdata = await bres.json();
			/* intermediate */
			ires = await fetch(`./data/domains/${value}/intermediate.json`);
			idata = await ires.json();
			/* advanced */
			ares = await fetch(`./data/domains/${value}/advanced.json`);
			adata = await ares.json();
		} else if (value == 'web' && domains[i] == 'mern') {
			/* beginner*/
			bres = await fetch(
				`./data/domains/${value}/${domains[i]}/beginner.json`,
			);
			bdata = await bres.json();
			/* intermediate */
			ires = await fetch(
				`./data/domains/${value}/${domains[i]}/intermediate.json`,
			);
			idata = await ires.json();
			/* advanced */
			ares = await fetch(
				`./data/domains/${value}/${domains[i]}/advanced.json`,
			);
			adata = await ares.json();
			/*projects*/
			pres = await fetch(
				`./data/domains/${value}/${domains[i]}/projects.json`,
			);
			pdata = await pres.json();
			console.log(pdata);
		} else {
			/* beginner*/
			bres = await fetch(
				`./data/domains/${value}/${domains[i]}/beginner.json`,
			);
			bdata = await bres.json();
			/* intermediate */
			ires = await fetch(
				`./data/domains/${value}/${domains[i]}/intermediate.json`,
			);
			idata = await ires.json();
			/* advanced */
			ares = await fetch(
				`./data/domains/${value}/${domains[i]}/advanced.json`,
			);
			adata = await ares.json();
		}
    
    /* new feature added linux resources*/

    if (value == "Blockchain" || value == "ethical_hacking" || value == "Game_dev" ||value == "robotics" || value == "CyberSecurity" || value == "git" || value == "data_structure_&_algorithm" || value == "database_management" || value == "api" || value == "linux") {
      console.log("hello");
      /* beginner*/
      bres = await fetch(`./data/domains/${value}/beginner.json`);
      bdata = await bres.json();
      /* intermediate */
      ires = await fetch(`./data/domains/${value}/intermediate.json`);
      idata = await ires.json();
      /* advanced */
      ares = await fetch(`./data/domains/${value}/advanced.json`);
      adata = await ares.json();
    }
    else {
      /* beginner*/
      console.log("here");
      bres = await fetch(`./data/domains/${value}/${domains[i]}/beginner.json`);
      bdata = await bres.json();
      window.localStorage.setItem('bdata', JSON.stringify(bdata));
      /* intermediate */
      ires = await fetch(
        `./data/domains/${value}/${domains[i]}/intermediate.json`
      );
      idata = await ires.json();
      window.localStorage.setItem('idata', JSON.stringify(idata));
      /* advanced */
      ares = await fetch(`./data/domains/${value}/${domains[i]}/advanced.json`);
      adata = await ares.json();
      window.localStorage.setItem('adata', JSON.stringify(adata));
    }

    /* beginner data */
    // later we can have loader
    document.location.href="/details.html";
	});
}
