const findFirstAccessorValue = (accessorArray, data) => {
  for (let i = 0; i < accessorArray.length; i++) {
    const valueCheck = accessorArray[i](data)
    if (
        valueCheck !== undefined &&
        !Number.isNaN(valueCheck) &&
        valueCheck !== null
    )
      return valueCheck
  }

  return undefined
}

export default findFirstAccessorValue;
