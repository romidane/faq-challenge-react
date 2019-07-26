module.exports = {
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  moduleNameMapper: {
    "^.+\\.css": "identity-obj-proxy"
  },
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  }
};
