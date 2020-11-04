export const PostProduct = () => {
    /*
        mutation {
            postOrder(userID: "5f76d0a19d0df10017b70988", productInput: {
                shippingAddress: {
                city: "AA",
                country: "Eth"
                },
                products: [
                {
                    _id: "5f8defb12d92620cc19fd97c",
                    productImage: "https://hbr.org/resources/images/article_assets/2019/11/Nov19_14_sb10067951dd-001.jpg",
                    productName: "Bag",
                    colors: [
                    { type: "Black", sizes: [
                        { type: "x", amount: 20}
                    ]}
                    ]
                }
                ],
                tax: 12,
                fee: 133,
                shippingCost: 23,
                totalCost: 14,
                orderInfo: {
                firstName: "Homer",
                lastName: "Simpson",
                phoneNumber: "+251"
                }
            })
            }
    */


    const products = [
        {
            _id: "5f8defb12d92620cc19fd97c",
            productImage: "https://hbr.org/resources/images/article_assets/2019/11/Nov19_14_sb10067951dd-001.jpg",
            productName: "Bag 1",
            colors: [
            { type: "Black", sizes: [
                { type: "x", amount: 20}
            ]}
            ]
        },
        {
            _id: "5f8defb12d92620cc19fd97c",
            productImage: "https://hbr.org/resources/images/article_assets/2019/11/Nov19_14_sb10067951dd-001.jpg",
            productName: "Bag 2",
            colors: [
            { type: "Black", sizes: [
                { type: "x", amount: 20}
            ]}
            ]
        }
    ]

    const requestObj = {
        query: `mutation(userID: $userID, productInput: $productInput) {
            postOrder(userID: $userID, productInput: $productInput) {
                _id
                tax
                fee
            }
        }`,
        variables: {
            userID: "some user ID",
            productInput: {
                shippingAddress: {
                    city: "AA",
                    country: "Eth"
                },
                products,
                tax: 12,
                fee: 133,
                shippingCost: 23,
                totalCost: 14,
                orderInfo: {
                    firstName: "Homer",
                    lastName: "Simpson",
                    phoneNumber: "+251"
                }
            }
        }
    }
}