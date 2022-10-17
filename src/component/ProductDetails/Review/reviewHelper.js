export const reviewActionType = {
    'REVIEW_REVIEW': 'REVIEW_REVIEW',
    'REVIEW_SORT': 'REVIEW_SORT',
    'REVIEW_FILTER': 'REVIEW_FILTER',
    'REVIEW_COMMENT': 'REVIEW_COMMENT',
}

export const reviewFilter = {
    fiveStars: false,
    fourStars: false,
    threeStars: false,
    twoStars: false,
    oneStar: false,
    photo: false,
}

export const reviewSortBy = [
    {
        value: 1,
        label: 'Most Recent'
    },
    {
        value: 2,
        label: 'Most Helpful'
    },
    {
        value: 3,
        label: 'Highest to Lowest Rating'
    },
    {
        value: 4,
        label: 'Lowest to Highest Rating'
    }
]

export const reviewData =
    [
        {
            'userID': `Eliza Koedding`,
            'rating': 5,
            'timeStamp': 'Aug 28 2022 19:00:00',
            'reviewTitle': 'SO Comfortable! SO Cute!',
            'reviewBody': "This jacket is super comfy and goes with every outfit. I would say if you have long arms and plan to use the thumb holes, size up! But I went with a small and even though I have long arms I am very happ with the fit!\n"
            ,
            'numberLiked': 0,
            'image': [],
            'comments': [],
            'usualSize': 'Small',
            'sizePurchased': 'Small',
            'fits': 'True to size'
        },
        {
            'userID': `Laurie R`,
            'rating': 4,
            'timeStamp': 'Sep 17 2022 12:34:56',
            'reviewTitle': 'Cute, but could be better',
            'reviewBody': "As others have stated this runs smaller than other Scubas. I bought both the black and white, but returned the white because it looked very dingy to me. The black is nicer in my opinion, but I did expect the fleece to be a little better quality for the price honestly."
            ,
            'numberLiked': 3,
            'image': [],
            'comments': [],
            'usualSize': 'M/L',
            'sizePurchased': 'M/L',
            'fits': 'Runs a bit small'
        },
        {
            'userID': `Aly B`,
            'rating': 3,
            'timeStamp': 'Sep 21 2022 23:45:67',
            'reviewTitle': 'Cozy and perfect for fall / winter',
            'reviewBody': "This is so comfy and warm. I LOVE this version of the scuba. Would also love to see an oversized scuba fleece full zip. The quality is amazing - it’s a splurge but worth it.\n" +
                "Fit is slightly smaller than the regular scubas."
            ,
            'numberLiked': 3,
            'image': [],
            'comments': [],
            'usualSize': '4 / 6',
            'sizePurchased': 'M/L',
            'fits': 'Runs a bit small'
        },
        {
            'userID': `User252`,
            'rating': 3,
            'timeStamp': 'Sep 01 2022 23:35:31',
            'reviewTitle': 'Love but slight problem',
            'reviewBody': 'I LOVE these pants. Super comfortable and easy to dress up and down However I’ve had them for a little over 2 months and the waist band seam has come undone and is unraveling, exposing the drawstring... Besides that I do love these pants.',
            'numberLiked': 1,
            'image': [
                'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86bHVsdWxlbW9u/d6622d2a-206a-557b-a487-40545d3ebe75?wid=2644&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
                'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86bHVsdWxlbW9u/c7c9a8a3-f932-5155-85a8-19e975eda0bb?wid=2644&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
                'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86bHVsdWxlbW9u/cbb26178-7f05-542f-a6f7-e330881f761c?wid=2644&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'
            ],
            'comments':
                [{
                    'content':
                    // 'Hi Helen2022,\n' +
                    //     '\n' +
                    //     'We’re sorry to hear your Back in Action Long Sleeve Shirt *Nulu isn’t working out for you. For time sensitive Quality Promise inquiries, feel free to visit your local store. We’d love to see what you’re experiencing firsthand.\n' +
                    //     '\n' +
                    //     'If you’re not near a store, you’re welcome to submit your request on our website. We\'ll need some details like what\'s happening with the item, and when and where it was purchased. You can fill out this information here: https://lululemongec.powerappsportals.com/en-US/pnp-homepage/\n' +
                    //     '\n' +
                    //     'Once you\'ve submitted the form, you\'ll hear back from our Returns team within 12-15 business days.',
                        'We’d love to connect on this—please provide us with more details here: https://lululemongec.powerappsportals.com/en-US/pnp-homepage/.',
                    'nickname': 'Guest Education Centre (GEC)',
                    'email': 'customerservice@lululemon.com',
                    'timeStamp': 'Sep 01 2022 23:36:01',
                    'official': true
                }],
            'usualSize': '2/4',
            'sizePurchased': '2',
            'fits': 'True to size'
        }
    ]