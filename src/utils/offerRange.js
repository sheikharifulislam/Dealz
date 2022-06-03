const offrRange = (price, offerPrice) => {
    return Math.round(((price - offerPrice) / price) * 100);
};

export default offrRange;
