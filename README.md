# jiyul next.js

## install
만약 `npm run dev` 실행시 아래 `error`가 발생한다면  
TypeError: Cannot set properties of undefined (setting 'reactRoot')  
아래 명령어를 실행해주세요.
```sh
npm i next@12.0.8 react@rc react-dom@rc
```

만약 `react-hook-form` install `error`가 발생한다면
```sh
npm i react-hook-form --legacy-peer-deps
```

## sync model to db
schema.prisma에 설정된 model을 db와 sync
```sh
npx prisma db push
```

## generate obj from model
schema.prisma에 설정된 model을 typescript object로 생성
```sh
npx prisma generate
```

## search db
```sh
npx prisma studio
```


