import stringToFn from './stringToFn';

const stringToArrayFn = (accessor, defaultAccessor, raw) => {
  if (accessor === undefined) {
    return [stringToFn(undefined, defaultAccessor, raw)];
  }
  let arrayOfAccessors = [];
  if (Array.isArray(accessor)) {
    arrayOfAccessors = accessor;
  } else {
    arrayOfAccessors = [accessor];
  }

  return arrayOfAccessors.map(a => stringToFn(a, defaultAccessor, raw));
};

export default stringToArrayFn;
