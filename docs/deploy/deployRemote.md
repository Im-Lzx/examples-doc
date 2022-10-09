# 项目初次部署
> 目的是将一个dist文件部署到目标服务器
## 首先尝试在本地预览项目

### 1、使用idea打开，未想到需要启用部署服务

- 使用idea将该项目作为新建项目打开，打开后点击`index.html`，发现页面无法正常访问，显示拒绝请求，初步推断原因是8080端口被占用，查询后排除该原因

- js文件需要加载才可以正常使用，且此时发现仅仅是将`dist`文件夹导入到了idea内，**并没有成功**构建项目

### 2、使用idea+tomcat进行部署尝试
1. 重新新建一个空项目，重构项目选择加入**web功能**，将`dist`下的文件复制到项目的`web`文件夹下（即只复制`dist`的后代）
2. 修改`WEB-INF\web.xml`加入`<welcome-list>`标签，将`index.html`修改为默认界面，配置tomcat运行配置，使用默认应用上下文，即`/dist`
3. 第一次尝试运行发现未成功加载资源，经过一番搜索查找，找到了可行的方案：[解决方案1](https://blog.csdn.net/qq_40346122/article/details/89057219)
4. 修改应用程序上下文为`/`后，发现可正常进入首页，但点击某些功能依然未成功加载（比如`/cssDemo`下的文件）
5. 猜测是相对路径问题，修改网页url，在`localhost:8080`后，`/cssDemo/colourBar.html`前加入`/dist`，发现资源成功加载
6. 遂又将应用程序上下文修改为默认的 `/dist`，重新部署后发现依然未成功加载

### 3、单独使用tomcat
1. `在tomcat根目录`下的`webapps`文件夹下创建`dist`文件夹，并将刚才idea项目中`web`文件夹下的所有文件复制到`dist`文件夹下
2. 启动tomcat服务，输入url `http://localhost:8080/dist/index.html` ，首页依然是未成功加载资源
3. 点击filterBlur功能，显示未成功
4. 查看url显示 `http://localhost:8080/cssDemo/filterBlur.htm` ，该url与预想url不同，在`8080/`后加入`dist`，果然成功显示，
5. 总结：若想要正常加载使用，需要对所有文件涉及到path的地方加入`/dist`开头，但是该工作量很大且不是最优解，故不采用

### 4、重新使用idea+tomcat
1. 重新修改应用程序上下文为`/`，测试一切正常。

## 部署在远端服务器

### 1、使用idea远程部署功能
1. 在配置过程中需要时使用到服务器端 tomcat 地址，遂先暂停配置，在服务器端安装好 __JDK17 + tomcat9__
2. 测试服务器端 tomcat 功能时发现测试失败，检查发现**服务器端8080 端口未开放** ，开放后测试成功
3. 在查询如何部署 dist 时，发现一篇博客也许可以用另一种方式解决上述单独使用 tomcat 出现的问题
4. [解决方案2](https://blog.csdn.net/luckykapok918/article/details/88535975)
5. 遂放弃 idea

### 2、手动部署项目到Remote
1. 删除`/opt/tomcat/webapps/ROOT/`文件夹下的所有文件，并将 dist 所有文件放入`ROOT`文件夹下
2. 重启服务器，启动服务，输入 `http://www.qinghe.life:8080/` 访问成功，且测试一切资源加载正常

### 3、修改tomcat默认端口
[解决方案3](https://blog.csdn.net/Jay_1989/article/details/52870760)