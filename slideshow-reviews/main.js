//create review constructor
//add reviews as objects
//store reviews within an array
//iterate thru array to display each review
//random review: array.length for Math.random

class Reviews {
    constructor (custName, custRole, custReview) {
        this.name = custName
        this.role = custRole
        this.review = custReview
    }
}

let Mark = new Reviews('Mark', 'Developer', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.')

let Nathan = new Reviews('Nathan', 'Product Owner', 'Venenatis a condimentum vitae sapien pellentesque habitant. Suscipit tellus mauris a diam maecenas. At quis risus sed vulputate odio ut. Viverra aliquet eget sit amet tellus cras adipiscing. In ante metus dictum at tempor commodo. A diam sollicitudin tempor id eu nisl nunc. ')

let Mary = new Reviews('Mary', 'Engineer', 'Aenean et tortor at risus viverra adipiscing at in tellus. Ac auctor augue mauris augue neque gravida in fermentum et. Parturient montes nascetur ridiculus mus. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam purus. Ut ornare lectus sit amet est. Neque laoreet suspendisse interdum consectetur libero id faucibus. Vestibulum mattis ullamcorper velit sed ullamcorper.')

let Robert = new Reviews('Robert', 'Project Manager', 'Venenatis a condimentum vitae sapien pellentesque habitant. Suscipit tellus mauris a diam maecenas. At quis risus sed vulputate odio ut. Viverra aliquet eget sit amet tellus cras adipiscing. In ante metus dictum at tempor commodo. A diam sollicitudin tempor id eu nisl nunc. ')

let Sarah = new Reviews('Sarah', 'Technical Consultant', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.')

let reviewsArray = [Mark, Nathan, Mary, Robert, Sarah];

const nextReviewBtn = document.getElementById('viewNextReview');
const previousReviewBtn = document.getElementById('viewPreviousReview');

nextReviewBtn.addEventListener('click', nextReview);
previousReviewBtn.addEventListener('click', previousReview);

//Global counter variable for Next Review
let nextReviewIndex = 0

function nextReview() {

    if(nextReviewIndex < reviewsArray.length) {
        document.querySelector('.customerName').innerText = reviewsArray[nextReviewIndex].name
        document.querySelector('.customerRole').innerText = reviewsArray[nextReviewIndex].role
        document.querySelector('.customerReview').innerText = reviewsArray[nextReviewIndex].review
        nextReviewIndex++

        } else {
            nextReviewIndex = 0
        }

}

function previousReview() {
    nextReviewIndex--
        if(nextReviewIndex >= 0) {
            document.querySelector('.customerName').innerText = reviewsArray[nextReviewIndex].name
            document.querySelector('.customerRole').innerText = reviewsArray[nextReviewIndex].role
            document.querySelector('.customerReview').innerText = reviewsArray[nextReviewIndex].review

            } else {
                nextReviewIndex = reviewsArray - 1
            }
}
