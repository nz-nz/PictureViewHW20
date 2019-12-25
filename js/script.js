let listt = [
    'https://mirpozitiva.ru/uploads/posts/2016-08/medium/1472042868_26.jpg',
    'https://mirpozitiva.ru/uploads/posts/2016-08/medium/1472042485_04.jpg',
    'https://mirpozitiva.ru/uploads/posts/2016-08/1472043884_02.jpg',
    'https://mirpozitiva.ru/uploads/posts/2016-08/medium/1472042585_06.jpg',
    'https://mirpozitiva.ru/uploads/posts/2016-08/medium/1472042649_11.jpg',
    'https://mirpozitiva.ru/uploads/posts/2016-08/medium/1472042903_31.jpg',
    'https://mirpozitiva.ru/uploads/posts/2016-08/medium/1472042557_09.jpg',
    'https://mirpozitiva.ru/uploads/posts/2016-08/medium/1472042938_27.jpg',
    'https://mirpozitiva.ru/uploads/posts/2016-08/1472042791_25.jpg',
];

let root = $('#root');

$('#search').keypress(function (key) {

    let inputElem = $('.formFooter input');
    let inputVal = inputElem.val();

    if (key.keyCode === 13 && inputVal){
        let arr = inputVal.split(',');
        console.log(arr);
        // arr[0].slice(arr.indexOf('[')+1);
        // inputVal = inputVal.toLowerCase();
        createElems(arr);
        inputElem.val('');
    }
});

// listt.forEach(elem=>{
//     let gridItem = $('<div>');
//     let darkItem = $('<div>');
//     gridItem.addClass('gridItem');
//     darkItem.addClass('dark');
//     gridItem.css('background-image', `url("${elem}")`);
//
//     gridItem.append(darkItem);
//     root.append(gridItem);
// });

function createElems (list) {
    console.log(list);
    // for (let i = 0; i < list.length; i++){
    //     let gridItem = $('<div>');
    //     let darkItem = $('<div>');
    //     gridItem.addClass('gridItem');
    //     darkItem.addClass('dark');
    //     let bg = list[i];
    //     console.log(bg);
    //     gridItem.css('background-image', `url("${bg}")`);
    //
    //     gridItem.append(darkItem);
    //     root.append(gridItem);
    // }
    list.forEach(elem=>{
        console.log(elem);
        let gridItem = $('<div>');
        let picCard = $('<div>');
        let darkItem = $('<div>');
        gridItem.addClass('gridItem');
        picCard.addClass('picCard');
        darkItem.addClass('dark');
        picCard.css('background-image', `url(${elem})`);

        gridItem.append(darkItem);
        gridItem.append(picCard);
        root.append(gridItem);
    });

    let allPics = $('.dark');

    allPics.click(function () {
        console.log('click');
        let currentElem = $(this).siblings('.picCard');
        let parentElem = currentElem.parent();
        let currentBGImg = currentElem.css('background-image');
        $(this).addClass('clicked');
        let bigElem = $('<div>');
        bigElem.addClass('bigger');
        bigElem.css('background-image', currentBGImg);

        // parentElem.siblings().children().removeClass('bigger');

        parentElem.append(bigElem);

        $('.bigger').click(function() {
            $(this).remove();
            // $(this).siblings('.bigger').remove();
            // parentElem.children('.bigger').remove();
        })
    });

    $('.btn').click(()=>{
        allPics.filter('.clicked').parent().css('box-shadow', '0 0 20px black');
        allPics.filter('.clicked').siblings('.bigger').css('box-shadow', '0 0 20px black');
        allPics.not('.clicked').css('box-shadow', 'inset 0 0 20px black')
    });

    // allPics.click(function () {
    //     let currentElem = $(this);
    //     let currentBGImg = currentElem.css('background-image');
    //     currentElem.addClass('clicked');
    //     let bigElem = $('<div>');
    //     bigElem.addClass('bigger');
    //     bigElem.css('background-image', currentBGImg);
    //
    //
    //     currentElem.siblings().children().removeClass('bigger');
    //
    //     currentElem.append(bigElem);
    //
    //     $('.bigger').click(function() {
    //         currentElem.children('.bigger').remove();
    //     })
    // });
    //
    // $('.btn').click(()=>{
    //     allPics.filter('.clicked').children().css('box-shadow', '0 0 20px black');
    //     allPics.not('.clicked').css('box-shadow', 'inset 0 0 20px black')
    // });

}


// allPics.click(function () {
//     let currentElem = $(this);
//     currentElem.children().removeClass('.bigger')
//     let currentBGImg = currentElem.css('background-image');
//     let bigElem = $('<div>');
//     bigElem.addClass('bigger');
//     bigElem.css('background-image', currentBGImg);
//
//     $(this).siblings().children().removeClass('bigger');
//
//     currentElem.append(bigElem);
//
//     $('.bigger').click(function() {
//         $('.bigger').removeClass('bigger');
//     })
// });