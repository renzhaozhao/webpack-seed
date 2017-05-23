# webpack-seed
## 基于webpack2的项目搭建

#### 理想中的工作流
- 自动化流程
  - less/scss => css
  - autoprefixer前缀自动补全
  - css压缩
  - sprite雪碧图自动生成
  - retina @2x @3x 自动生成适配
  - imagemin图片压缩
  - js编译压缩、sourcemap
- 开发调试
  - LiveReload
  - react-hot-loader
- 生产模式
  - css抽离 extract-text-webpack-plugin
  - 文件名生成hash值 
  - 改动一个文件其他hash值不变
