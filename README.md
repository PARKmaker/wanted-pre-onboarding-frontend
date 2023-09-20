# 박상현

## 프로젝트의 실행 방법

```shell
git clone
npm install
npm start
```

## 데모 영상

## 배포 링크

<div align="center">

  <h1>박상현 프리온보딩 사전과제</h1>
  
  <!-- <p>
    An awesome README template for your projects! 
  </p> -->
</div>
<br />

<!-- About the Project -->

## :star2: 배포 링크

<a href='https://d3llwf60qjrfnw.cloudfront.net/todo'>배포 사이트</a>

<!-- Screenshots -->

### :camera: 데모 영상

<div align="center">
[![Video Label](http://img.youtube.com/vi/QR0QRA5rwj0/0.jpg)](https://youtu.be/QR0QRA5rwj0?t=0s)
  
</div>

<!-- TechStack -->

### :space_invader: Tech Stack

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://reactjs.org/">React.js</a></li>
    <li><a href="https://reactrouter.com/en/main/">react-router-dom</a></li>
  </ul>
</details>

<details>
<summary>CI/CD</summary>
  <ul>
    <li><a href="https://aws.amazon.com/ko/free/?trk=fa2d6ba3-df80-4d24-a453-bf30ad163af9&sc_channel=ps&ef_id=CjwKCAjwsKqoBhBPEiwALrrqiKoMX_LxcAoYVRTblsNIXBmNwWL8cgYVlRsfPMbab-AyZNn_09cvqBoC80EQAvD_BwE:G:s&s_kwcid=AL!4422!3!563761819834!e!!g!!aws!15286221779!129400439466&all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all">AWS s3</a></li>
    <li><a href="https://aws.amazon.com/ko/free/?trk=fa2d6ba3-df80-4d24-a453-bf30ad163af9&sc_channel=ps&ef_id=CjwKCAjwsKqoBhBPEiwALrrqiKoMX_LxcAoYVRTblsNIXBmNwWL8cgYVlRsfPMbab-AyZNn_09cvqBoC80EQAvD_BwE:G:s&s_kwcid=AL!4422!3!563761819834!e!!g!!aws!15286221779!129400439466&all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all">AWS CloudFront</a></li>
    <li><a href="https://github.com/">Github actions</a></li>
  </ul>
</details>

<!-- Features -->

### :dart: Features

- Feature 1
- Feature 2
- Feature 3

### :key: Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`REACT_APP_API_URL`

<!-- Getting Started -->

## :toolbox: Getting Started

<!-- Prerequisites -->
<!-- Installation -->

### :running: Run Locally

Clone the project

```bash
  git clone https://github.com/PARKmaker/wanted-pre-onboarding-frontend.git
```

Go to the project directory

```bash
  cd wanted-pre-onboarding-frontend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

## :compass: Roadmap

#### 1. 로그인/ 회원가입

**Assignment 1**

- [x] - 회원가입과 로그인 페이지에 이메일과 비밀번호의 유효성 검사기능을 구현해주세요
- [x] - 입력된 이메일과 비밀번호가 유효성 검사를 통과하지 못한다면 button에 `disabled` 속성을 부여해주세요

**Assignment 2**

- [x] 회원가입 페이지에서 버튼을 클릭 시 회원가입을 진행하고 회원가입이 정상적으로 완료되었을 시 `/signin` 경로로 이동해주세요
- 추가) 회원 이메일이 기존에 있을 시 오류 메세지

**Assignment 3**

- [x] 로그인 페이지에서 버튼을 클릭 시, 로그인을 진행하고 로그인이 정상적으로 완료되었을 시 `/todo` 경로로 이동해주세요
- 로그인 페이지에서 버튼을 클릭 시, 로그인을 진행하고 로그인이 정상적으로 완료되었을 시 `/todo` 경로로 이동해주세요
  - 로그인 API는 로그인이 성공했을 시 Response Body에 JWT를 포함해서 응답합니다.
  - 응답받은 JWT는 로컬 스토리지에 저장해주세요

**Assignment 4**

- [x] 로그인 여부에 따른 리다이렉트 처리를 구현해주세요
- 로컬 스토리지에 토큰이 있는 상태로 `/signin` 또는 `/signup` 페이지에 접속한다면 `/todo` 경로로 리다이렉트 시켜주세요
- 로컬 스토리지에 토큰이 없는 상태로 `/todo`페이지에 접속한다면 `/signin` 경로로 리다이렉트 시켜주세요

#### **2. TODO LIST**

**Assignment 5**

- [x] `/todo`경로에 접속하면 투두 리스트의 목록을 볼 수 있도록 해주세요
- [x] 목록에서는 TODO의 내용과 완료 여부가 표시되어야 합니다.
- [x] TODO의 완료 여부는 `<input type="checkbox" />`를 통해 표현해주세요
- [x] TODO는 `<li>` tag를 이용해 감싸주세요

**Assignment 6**

- [x] 리스트 페이지에 새로운 TODO를 입력할 수 있는 input과 추가 button을 만들어주세요
- TODO 입력 input에는 `data-testid="new-todo-input"` 속성을 부여해주세요
- TODO 추가 button에는 `data-testid="new-todo-add-button"` 속성을 부여해주세요
- [x] 추가 button을 클릭하면 입력 input의 내용이 새로운 TODO로 추가되도록 해주세요
- [x] TODO를 추가 한 뒤 새로고침을 해도 추가한 TODO가 목록에 보여야 합니다.

**Assignment 7**

- [x] TODO의 체크박스를 통해 완료 여부를 수정할 수 있도록 해주세요.

**Assignment 8**

- [x] TODO 우측에 수정버튼과 삭제 버튼을 만들어주세요
- 수정 버튼에는 `data-testid="modify-button"` 속성을 부여해주세요
- 삭제 버튼에는 `data-testid="delete-button"` 속성을 부여해주세요

**Assignment 9**

- [x] 투두 리스트의 삭제 기능을 구현해주세요
- 투두 리스트의 TODO 우측의 삭제버튼을 누르면 해당 아이템이 삭제되도록 해주세요

**Assignment 10**

- [x] 투두 리스트의 수정 기능을 구현해주세요
- TODO 우측의 수정 버튼을 누르면 수정모드가 활성화 되도록 해주세요
- 수정모드에서는 TODO의 내용을 변경할 수 있어야 합니다.
- 수정모드에서는 TODO의 내용이 input창 안에 입력된 형태로 변경해주세요
  - 수정 input창에는 `data-testid="modify-input"` 속성을 부여해주세요
- 수정모드에서는 TODO의 우측에 제출버튼과 취소버튼이 표시되게 해주세요
  - 제출버튼에는 `data-testid="submit-button"` 속성을 부여해주세요
  - 취소버튼에는 `data-testid="cancel-button"` 속성을 부여해주세요
- 제출버튼을 누르면 수정한 내용을 제출해서 내용이 업데이트 될 수 있도록 해주세요
- 취소버튼을 누르면 수정한 내용을 초기화 하고, 수정모드를 비활성화 해주세요

## :grey_question: 고민한점

- 로그인, 회원가입 폼 재사용을 위한 컴포넌트를 만들고 Custom Hook(use-input)을 만들어 폼 유효성 검사
- “use-input”훅을 사용한 todoitem을 수정 할때마다 TodoList 재평가 → 커스텀훅은 onChange이벤트를 사용해서 입력마다 리 렌더링됨, useRef을 사용하여 해결
