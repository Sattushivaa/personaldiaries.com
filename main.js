console.log('Hello World!');
let data = null;
!async function getData() {
  let localData = await fetch('./Stories.json');
  localData = await localData.json();
  data = localData;
  showData(data);
}();

function showData(data){
  data.stories.forEach((story,index)=>{
    let dv = document.createElement('div');
    let title = document.createElement('span');
    let content = document.createElement('div');
    title.innerText = story.name;
    dv.appendChild(title);
    dv.appendChild(content);
    content.innerText = story.content;
    dv.className = 'story';
    title.className = 'story_title';
    content.className = 'content';
    stories.append(dv);
  })
}