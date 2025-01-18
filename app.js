const elements = document.getElementsByClassName("form-check-input");

console.log(elements)
const allUrl = "https://ihatov08.github.io/kimetsu_api/api/all.json"
const hasiraUrl = "https://ihatov08.github.io/kimetsu_api/api/hashira.json"
const oniUrl = "https://ihatov08.github.io/kimetsu_api/api/oni.json"
const kistutaiUrl = "https://ihatov08.github.io/kimetsu_api/api/kisatsutai.json"

for(element of elements){
    // console.log(element)
    console.log(element.value)
    element.addEventListener('change',async function(){
        console.log(this.value);
        switch (this.value){
            case 'option1':
                if( this.checked ) {
                    console.log('全キャラクター');
                    let data = await fetchDataAndPrint(allUrl)
                    console.log(data)
                    displayData(data)
                }
                break;
            case 'option2':
                if( this.checked ) {
                    console.log('鬼殺隊');
                    let data = await fetchDataAndPrint(hasiraUrl)
                    console.log(data)
                }
                break;
            case 'option3':
                if( this.checked ) {
                    console.log('柱');
                    let data = await fetchDataAndPrint(oniUrl)
                    console.log(data)
                break;
                }
            case 'option4':
                if( this.checked ) {
                    console.log('鬼');
                    let data = await fetchDataAndPrint(kistutaiUrl)
                    console.log(data)
                }
                break;
            default:
                console.log('住所はその他です');
        
        }
    })
}
async function fetchDataAndPrint(url) {
    try {
        let response = await fetch(url);
        let data = await response.json();
        // console.log(data);
        return data;
    } catch (error) {
        console.error("Error:", error);
    }
}

function displayData(data){
    let parent_element = document.createElement('div');
    for(let i =0; i<data.length; i++){
        


    }

}
