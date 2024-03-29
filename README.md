# HungNTN - Project: Image Processing Microservice on AWS

## Development Server:

### Starting the server with npm run dev runs a local instance of the server with no errors:

![Tên hình ảnh](screenshot/Screenshot_10.png)

### The stubbed @TODO1 endpoint in src/server.js is completed and accepts valid requests including: http://localhost:{{PORT}}/filteredimage?image_url=https://upload.wikimedia.org/wikipedia/commons/b/bd/Golden_tabby_and_white_kitten_n01.jpg:

- Code:

![Tên hình ảnh](screenshot/Screenshot_2.png)

### Successful responses have a 200 code, at least one error code for caught errors (i.e. 422):
- Success with url: https://upload.wikimedia.org/wikipedia/commons/b/bd/Golden_tabby_and_white_kitten_n01.jpg:

![Tên hình ảnh](screenshot/Screenshot_11.png)

- Fail with status code 422:

![Tên hình ảnh](screenshot/Screenshot_4.png)

## Elastic Beanstalk Deployment:

### The project was deployed using the AWS Elastic Beanstalk CLI eb init, eb create, and eb deploy commands:

- eb init:

![Tên hình ảnh](screenshot/Screenshot_5.png)

- eb create:

![Tên hình ảnh](screenshot/Screenshot_6.png)

### Access successfully with url : http://hungntn-projectstartcode-dev.us-east-1.elasticbeanstalk.com/

![Tên hình ảnh](screenshot/Screenshot_8.png)

### An endpoint URL for a running elastic beanstalk deployment (EB_URL) has been submitted along with the project submission. This endpoint responds to valid GET requests including: http://hungntn-projectstartcode-dev.us-east-1.elasticbeanstalk.com/filteredimage?image_url=https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg:

![Tên hình ảnh](screenshot/Screenshot_9.png)


### Already update log, constant to show message and axios to fix error and comment in review code:

![Tên hình ảnh](screenshot/Screenshot_12.png)

- And update code:

![Tên hình ảnh](screenshot/Screenshot_13.png)

### Already fix issue can not load image with url: https://upload.wikimedia.org/wikipedia/commons/b/bd/Golden_tabby_and_white_kitten_n01.jpg

- Localhost:
url: http://localhost:8082/filteredimage?image_url=https://upload.wikimedia.org/wikipedia/commons/b/bd/Golden_tabby_and_white_kitten_n01.jpg

![Tên hình ảnh](screenshot/Screenshot_14.png)

- ElasticBeanstalk:
url: http://hungntn-projectstartcode-dev.us-east-1.elasticbeanstalk.com/filteredimage?image_url=https://upload.wikimedia.org/wikipedia/commons/b/bd/Golden_tabby_and_white_kitten_n01.jpg

![Tên hình ảnh](screenshot/Screenshot_15.png)