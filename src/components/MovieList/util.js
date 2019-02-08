const SuccessOrError = status => status === 'success';

const PickOnlyDataAndStatus = (payload) => {
  // only pick data inside data object and status from payload
  const { response: { data }, status } = payload;

  // return the data and status
  return ({ data, status });
};

const GetPrices = (rate) => {
  if(rate < 4) {
    return 'Rp. 3.500';
  }else if (rate < 6) {
    return 'Rp. 8.250';
  }else if (rate < 8) {
    return 'Rp. 16.350';
  }else {
    return 'Rp. 21.250';
  }
};

export {
  SuccessOrError,
  PickOnlyDataAndStatus,
  GetPrices,
};
