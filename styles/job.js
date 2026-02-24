let Interview = [];
let Rejected = [];
let currentStatus = 'all'


let total = document.getElementById("total");
let interview = document.getElementById("interview");
let rejected = document.getElementById("rejected")


const calculateCardSection = document.getElementById('allCards');
const mainContainer = document.querySelector('main');
const filteredSection = document.getElementById('filtered-section')

const allFilterBtn = document.getElementById('all-filter-btn')
const interviewFilterBtn = document.getElementById('interview-filter-btn')
const rejectedFilterBtn = document.getElementById('rejected-filter-btn')

function calculateCount(){
    total.innerText = calculateCardSection.children.length;
    interview.innerText = Interview.length;
    rejected.innerText = Rejected.length;
}
calculateCount()

function toggleStyle(id){
   allFilterBtn.classList.remove('bg-blue-600','text-white');
   interviewFilterBtn.classList.remove('bg-white','text-[#64748B]');
   rejectedFilterBtn.classList.remove('bg-white','text-[#64748B]');


   allFilterBtn.classList.add('bg-gray-300','text-black');
   interviewFilterBtn.classList.add('bg-gray-300','text-black');
   rejectedFilterBtn.classList.add('bg-gray-300','text-black');

   const selected = document.getElementById(id)
   currentStatus = id

   selected.classList.remove('bg-gray-300','text-black')
   selected.classList.add('bg-blue-600','text-white');

   if(id=='interview-filter-btn')
   {
      calculateCardSection.classList.add('hidden');
      filteredSection.classList.remove('hidden')
      renderInterview();
   }
   else if(id=='all-filter-btn')
   {
      calculateCardSection.classList.remove('hidden');
      filteredSection.classList.add('hidden')
   }
   else if(id== 'rejected-filter-btn')
   {
      calculateCardSection.classList.add('hidden');
      filteredSection.classList.remove('hidden')
      renderRejected();
   }


}

mainContainer.addEventListener('click',function(event)
{
    
  if(event.target.classList.contains('interview-btn'))
 {
      const parenNode = event.target.parentNode.parentNode;

   const companyName = parenNode.querySelector('.card-title').innerText;
   const occupation = parenNode.querySelector('.occupation').innerText;
   const list = parenNode.querySelector('.list').innerText;
   const applyBtn = parenNode.querySelector('.apply-btn').innerText;
   const description = parenNode.querySelector('.description').innerText;

   parenNode.querySelector('.apply-btn').innerText = 'Interviewed'
   const cardInfo = {
    companyName,occupation,list,applyBtn:'Interviewed',description
   }
   
   const infoExist = Interview.find(item => item.companyName == cardInfo.companyName)
   if(!infoExist)
   {
    Interview.push(cardInfo)
   }
   Rejected = Rejected.filter(item => item.companyName != cardInfo.companyName)
   calculateCount()

   if(currentStatus=='rejected-filter-btn')
   {
      renderRejected();
   }
 }
  else if(event.target.classList.contains('rejected-btn'))
 {
      const parenNode = event.target.parentNode.parentNode;

   const companyName = parenNode.querySelector('.card-title').innerText;
   const occupation = parenNode.querySelector('.occupation').innerText;
   const list = parenNode.querySelector('.list').innerText;
   const applyBtn = parenNode.querySelector('.apply-btn').innerText;
   const description = parenNode.querySelector('.description').innerText;

   parenNode.querySelector('.apply-btn').innerText = 'Rejected'
   const cardInfo = {
    companyName,occupation,list,applyBtn:'Rejected',description
   }
   
   const infoExist = Rejected.find(item => item.companyName == cardInfo.companyName)
   if(!infoExist)
   {
    Rejected.push(cardInfo)
   }

   Interview = Interview.filter(item => item.companyName != cardInfo.companyName)

   if(currentStatus == "interview-filter-btn")
   {
      renderInterview();
   }
   
   calculateCount()
 }

else if(event.target.classList.contains('delete-btn'))
{
    const parentNode = event.target.parentNode.parentNode;

    const companyName = parentNode.querySelector('.card-title').innerText;

    Interview = Interview.filter(item => item.companyName != companyName);

    Rejected = Rejected.filter(item => item.companyName != companyName);

    parentNode.remove();
    calculateCount();

    if(currentStatus == 'interview-filter-btn'){
        renderInterview();
    }
    else if(currentStatus == 'rejected-filter-btn'){
        renderRejected();
    }
}
})
mainContainer.addEventListener('click',function(event)
{
    
  if(event.target.classList.contains('interview-btn'))
 {
      const parenNode = event.target.parentNode.parentNode;

   const companyName = parenNode.querySelector('.card-title').innerText;
   const occupation = parenNode.querySelector('.occupation').innerText;
   const list = parenNode.querySelector('.list').innerText;
   const applyBtn = parenNode.querySelector('.apply-btn').innerText;
   const description = parenNode.querySelector('.description').innerText;

   parenNode.querySelector('.apply-btn').innerText = 'Interviewed'
   const cardInfo = {
    companyName,occupation,list,applyBtn:'Interviewed',description
   }
   
   const infoExist = Interview.find(item => item.companyName == cardInfo.companyName)
   if(!infoExist)
   {
    Interview.push(cardInfo)
   }
   Rejected = Rejected.filter(item => item.companyName != cardInfo.companyName)
   calculateCount()

   if(currentStatus=='rejected-filter-btn')
   {
      renderRejected();
   }
 }
  else if(event.target.classList.contains('rejected-btn'))
 {
      const parenNode = event.target.parentNode.parentNode;

   const companyName = parenNode.querySelector('.card-title').innerText;
   const occupation = parenNode.querySelector('.occupation').innerText;
   const list = parenNode.querySelector('.list').innerText;
   const applyBtn = parenNode.querySelector('.apply-btn').innerText;
   const description = parenNode.querySelector('.description').innerText;

   parenNode.querySelector('.apply-btn').innerText = 'Rejected'
   const cardInfo = {
    companyName,occupation,list,applyBtn:'Rejected',description
   }
   
   const infoExist = Rejected.find(item => item.companyName == cardInfo.companyName)
   if(!infoExist)
   {
    Rejected.push(cardInfo)
   }

   Interview = Interview.filter(item => item.companyName != cardInfo.companyName)

   if(currentStatus == "interview-filter-btn")
   {
      renderInterview();
   }
   
   calculateCount()
 }
})

function renderInterview (){
   filteredSection.innerHTML = '';
   for(let inter of Interview)
   {
    console.log(inter);
    
    let div = document.createElement('div');
    div.className = 'each-card p-6 rounded-lg bg-white mt-4'
    div.innerHTML = ` <div class="card-title flex justify-between">
           <h2 class="font-semibold text-[18px] text-[#002c5c] leading-6 pb-1">${inter.companyName}</h2>
           <img src="Trash.png" alt="">
        </div>
        <p class="occupation text-[#64748b] leading-[22px] pb-5">${inter.occupation}</p>
   
        <div class="list">
           <p class="text-gray-700 text-[14px]  pb-5 leading-5">${inter.list}</p>
        </div>
        <button class="apply-btn text-[#002c5c] bg-[#eef4ff] rounded text-center w-28 h-9 pl-3 pr-3 pt-2 pb-2 text-[14px] mb-2">${inter.applyBtn}</button>
        <p class="description text-[#323b49] text-[14px] leading-5 pb-5">${inter.description}</p>
   
        <div class="button flex gap-2">
           <button class="border border-[#10b981] text-[#10b981] font-semibold text-[14px] text-center  w-24 h-9">INTERVIEW</button>
           <button class="border border-[#ef4444] text-[#ef4444] font-semibold w-24 h-9 text-[14px] text-center">REJECTED</button>
        </div>`

        filteredSection.appendChild(div)
   }
}
function renderRejected (){
   filteredSection.innerHTML = '';
   for(let reject of Rejected)
   {
    console.log(reject);
    
    let div = document.createElement('div');
    div.className = 'each-card p-6 rounded-lg bg-white mt-4'
    div.innerHTML = ` <div class="card-title flex justify-between">
           <h2 class="font-semibold text-[18px] text-[#002c5c] leading-6 pb-1">${reject.companyName}</h2>
           <img src="Trash.png" alt="">
        </div>
        <p class="occupation text-[#64748b] leading-[22px] pb-5">${reject.occupation}</p>
   
        <div class="list">
           <p class="text-gray-700 text-[14px]  pb-5 leading-5">${reject.list}</p>
        </div>
        <button class="apply-btn text-[#002c5c] bg-[#eef4ff] rounded text-center w-28 h-9 pl-3 pr-3 pt-2 pb-2 text-[14px] mb-2">${reject.applyBtn}</button>
        <p class="description text-[#323b49] text-[14px] leading-5 pb-5">${reject.description}</p>
   
        <div class="button flex gap-2">
           <button class="border border-[#10b981] text-[#10b981] font-semibold text-[14px] text-center  w-24 h-9">INTERVIEW</button>
           <button class="border border-[#ef4444] text-[#ef4444] font-semibold w-24 h-9 text-[14px] text-center">REJECTED</button>
        </div>`

        filteredSection.appendChild(div)
   }
}