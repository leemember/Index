# 💻 index clone

### 목적

> https://index.bithumb.com/board/index1.php <br/> https://index.bithumb.com/board2/index1.php
>

### FE 기술스택

#### Version information

- yarn `1.22.19`
- Node `v16.15.1`
- React (라이브러리) `^18.2.0`
- TypeScript (언어) `^4.7.4`
- Recoil (상태관리) `^0.7.4`

### 실행 및 빌드

#### 로컬 실행

```
$npm start
```

#### build

```
all 파일 최종 빌드
$yarn run build

서버 띄우기
$yarn install -g serve
```

#### run

```
$serve -s build
```

-----------------


### [F/E] Index
#### ✨ 리뉴얼
- PHP → React
- Typescript
- Recoil

사용자의 편의성을 고려하여 UIUX 개선시키는 것에 중점 둠

반응형

#### DatePicker
- 데이터 없을 경우 예외처리

#### 🧠 목표 및 배운점
- 백엔드에서 batch라는 데이터 수집기의 개념 이해
- 리액트 polling
- 일정한 주기로 HTTP 요청을 보내는 방식
- 새로운 상태관리 (recoil) learning
- 데이터 핸들링
- 중복되는 코드는 리팩토링
