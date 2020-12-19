# react-native 개발환경 설정 및 간단한 터치 게임 구현

소프트웨어학과 201620940 김동윤

## react-native를 설치하기 위해 필요한 것들

* ## 공통 
    * Visual Studio Code (있으면 편함)
			인터넷에서 홈페이지에서 설치

* ## mac OS를 사용하는 경우 
	* Homebrew

			/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)" 
		를 복사한 후 터미널에 붙여넣어서 설치한다.

	* Node js

    		brew install node
		를 복사한 후 터미널에 붙여넣어 설치한다.

	* Cocoapods
	
			sudo gem install cocoapods

		를 복사한 후 터미널에 붙여넣어 설치한다.

	* Watchman

			brew install watchman
		를 복사한 후 터미널에 붙여넣어 설치한다.

	* Xcode
	
		앱스토에서 설치

* ## window를 사용하는 경우
	* Chocolatey

			Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
		를 복사하여 관리자 권한으로 실행한 power shell에 붙여넣는다.

	* Python

			choco install python
		을 복사하여 관리자 권한으로 실행한 power shell에 붙여넣는다.

		설치가 끝나면 컴퓨터를 재부팅 해야한다.

	* Node js
		
		인터넷에서 검색후 홈페이지에서 다운을 받아 설치한다.

	* Android Studio
		
		인터넷에서 검색하여 다운을 받는다.

		* 설치과정
		
			standard install이 아닌 custom install을 선택하고 sdk component setting에서 Android Virtual Device를 반드시 체크하여 진행한다.

		* 환경변수 설정
			
			우측 상단의 sdk manager에서 sdk 디렉토리 주소를 복사한 후에 

				제어판-시스템-고급시스템설정-고급(탭)-환경변수
			에서 ANDROID_HOME 환경변수 추가를 한다.

			PATH(환경변수 중)를 선택 후 복사한 경로에

				\platform-tools
			를 더하여 추가한다.

		* SDK Manager

			* SDK Platforms

				자신이 사용하는 api level을 선택하여 설치 (21, 28, 29, 30 설치함)
			
			* SDK Tools (추가 선택)

				* Android SDK Build-Tools
				* Android Emulator
				* HAXM installer

		* AVD Manager

			자신이 사용하는 레벨의 api base의 android virtual machine을 생성한다.

## 간단한 터치 게임 구현
* ## state
	state와 setState를 통한 접근과 react-native에서 화면을 업데이트 하는 방법에 대해서 간단하게 알아본다.
