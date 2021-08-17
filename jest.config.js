// 测试配置说明 https://github.com/umijs/umi/issues/446

const path = require('path');

module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|sass|scss)$': require.resolve('identity-obj-proxy'),
  },
};
