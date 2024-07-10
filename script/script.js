// web swiper
const webS = new Swiper('.web .swiper', {
    autoplay:{delay:1000},
    loop:true,
    navigaton:{
        nextEl:'.web .swiper-button-next',
        prevEl:'.web .swiper-button-prev',
    }
})
// 이전, 다음 기본 값 position: absolute 인데,
// swiper 클래스 대상의 안에 작성했을땐 swiper가 absolute를 잡는 relative 기본내장으로 별도 설정을 안해도 되지만 밖에 작성했을땐 밖 위치 기준으로 그 부모에게 relative 설정을 따로 해야 한다!!

/* sns swiper */
const snsS = new Swiper('.sns .swiper',{
    slidesPerView:2,//한번에 4개 보이기 //slides "s" 뻬먹지 마ㅏㅏㅏㅏ(기본 : 모바일 : 600px)
    spaceBetween:20,//슬라이드 사이 여백
    autoplay:{delay:1,desableOnInteration:true,},
    loop:true,
    speed:8000,
    freemode:true,
    //반응형 슬라이드 수
    breakpoints:{
        800:{slidesPerView:3,}, //800이상일때 3개
        1200:{slidesPerView:4,}, //1200이상일때 4개
    }
})

/* detail swiper */
const detailS = new Swiper('.detail .swiper', {
    slidesPerView:4,//한번에 4개 보이기 //slides "s" 뻬먹지 마ㅏㅏㅏㅏ
    spaceBetween:20,//슬라이드 사이 여백
    autoplay:{delay:1000},
    loop:true,
})
/* detail popup */
// 1. 팝업 숨기기 big_bg
// 2. swiper img 클릭시
// 3. 팝업 보이기

const big_bg = document.querySelector('.big_bg')
const detail_img = document.querySelectorAll('.detail .swiper-slide img')
const big_img = document.querySelector('.big_bg img')
console.log(big_bg, detail_img, big_img)

big_bg.style.display = 'none'; //팝업 초기 숨기기

for(let detail of detail_img){//6개 이미지 반복문 접근
    detail.addEventListener('click',(e)=>{
        big_bg.style.display = 'block';
        //클릭한 대상 관련에 a가 있다면 스크롤이 위로 올라가는 기능 막기
        e.preventDefault()
        /* 팝업 스크롤 다 올린뒤 뒤 스크롤이 다시 또 움직이는...오류 */
        document.body.style.overflow = 'hidden';
        /* 이미지 클릭시 해당이미지 나오는 이벤트 코드 */
        // detail_img 클릭시
        // big_img 의 경로가 떠야 함
        console.log(detail.src)
        big_img.src = detail.src
        /* 팝업 열고, 스크롤 내린 후 다른 이미지 클릭하면 스크롤 내려간 값을 기억해서 스크롤 내려간 채로 이미지가 팝업되는 오류 해결*/
        big_bg.children[0].scrollTo(0,0)
    })
}
/* 팝업 출력시 팝업 닫기 */
big_bg.addEventListener('click',()=>{
    big_bg.style.display = 'none';
    document.body.style.overflow = '';//팝업 닫은 후 body 스크롤 되게 하기
})