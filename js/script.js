let listt = [
    'https://bipbap.ru/wp-content/uploads/2017/10/0_8eb56_842bba74_XL.jpg',
    'https://bipbap.ru/wp-content/uploads/2017/10/0_a9e8c_fefaa1d2_XL.jpg',
    'https://bipbap.ru/wp-content/uploads/2017/10/fon-1.jpg',
    'https://bipbap.ru/wp-content/uploads/2017/10/fon-2.jpg',
    'https://bipbap.ru/wp-content/uploads/2017/10/fon-3.jpg',
    'https://bipbap.ru/wp-content/uploads/2017/10/0_a9e8f_beecb6d9_XL.jpg',
    'https://bipbap.ru/wp-content/uploads/2017/10/121746.jpg',
    'https://bipbap.ru/wp-content/uploads/2017/10/1443282805_37698__maldives-dusk_p.jpg',
    'https://bipbap.ru/wp-content/uploads/2017/10/domiki_reka_les_kusty_zelen_derevya_1920x1080.jpg',
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

createElems(listt);
