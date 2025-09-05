/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface BaseErrorResponse {
  success?: boolean;
  /** @format int32 */
  code?: number;
  message?: string;
  /** @format date-time */
  timestamp?: string;
}

export interface SignUpRequestDTO {
  /**
   * 이메일
   * @example "konkuk@gmail.com"
   */
  email: string;
  /**
   * 비밀번호
   * @example "12345"
   */
  password: string;
  /**
   * 이름
   * @example "이정연"
   */
  name: string;
}

export interface BaseResponseVoid {
  success?: boolean;
  /**
   * @format int32
   * @example 200
   */
  code?: number;
  /** @example "요청에 성공하였습니다." */
  message?: string;
  data?: object;
}

export interface UserUpdateProfileRequestDTO {
  /**
   * 이름
   * @example "이정연"
   */
  newName: string;
  /**
   * 프로필 사진
   * @example "image1"
   */
  newProfileImage: string;
}

export interface UserUpdatePasswordRequestDTO {
  /**
   * 현재 비밀번호
   * @example "dlwjddus123"
   */
  currentPassword: string;
  /**
   * 새 비밀번호
   * @example "dlwjddus1234"
   */
  newPassword: string;
  /**
   * 새 비밀번호 확인
   * @example "dlwjddus1234"
   */
  confirmPassword: string;
}

export interface AddScheduleRequestDTO {
  /**
   * 일정명
   * @example "수업"
   */
  scheduleName: string;
  /**
   * 요일
   * @format int32
   */
  dayOfWeek: number;
  /** 종료 시간 */
  startTime: LocalTime;
  /** 종료 시간 */
  endTime: LocalTime;
  /**
   * 장소
   * @example "건국대학교"
   */
  placeName: string;
}

/**
 * 종료 시간
 * @example "12:00:00"
 */
export interface LocalTime {
  /** @format int32 */
  hour?: number;
  /** @format int32 */
  minute?: number;
  /** @format int32 */
  second?: number;
  /** @format int32 */
  nano?: number;
}

export interface PromiseSuggestRequestDTO {
  /**
   * 약속 이름
   * @example "KUIT BARO 2차 회의"
   */
  promiseName: string;
  /**
   * 약속 제안 시작일
   * @format date
   * @example "2025-03-09"
   */
  suggestedStartDate: string;
  /**
   * 약속 제안 종료일
   * @format date
   * @example "2025-03-13"
   */
  suggestedEndDate: string;
  /**
   * 초기 약속 제안 장소
   * @example "건국대학교 근처"
   */
  suggestedRegion: string;
}

export interface PromiseVoteRequestDTO {
  /**
   * 투표한 약속 후보 시간들의 식별 ID
   * @example [1,2,3]
   */
  promiseCandidateTimeIds: number[];
  /**
   * 투표한 약속 후보 장소들의 식별 ID
   * @example [1,2,3]
   */
  promiseCandidatePlaceIds: number[];
}

export interface SetPromiseAvailableTimeRequestDTO {
  /**
   * @maxItems 2147483647
   * @minItems 1
   */
  times: TimeDTO[];
}

export interface TimeDTO {
  /**
   * 날짜
   * @format date
   */
  date?: string;
  /** 종료 시간 */
  startTime?: LocalTime;
  /** 종료 시간 */
  endTime?: LocalTime;
}

export interface SetPromiseSuggestedPlaceRequestDTO {
  /**
   * 약속 ID
   * @format int64
   * @example 1
   */
  promiseId: number;
  /**
   * 장소 ID
   * @format int64
   * @example 1
   */
  placeId: number;
  /**
   * 위도
   * @format double
   * @min -90
   * @max 90
   * @example 37.1233712
   */
  latitude?: number;
  /**
   * 경도
   * @format double
   * @min -180
   * @max 180
   * @example 121.12371231
   */
  longitude?: number;
  /**
   * 장소명
   * @example "홍콩포차"
   */
  placeName?: string;
  /**
   * 주소
   * @example "서울특별시 광진구 화양동"
   */
  address?: string;
}

export interface MailRequestDTO {
  /**
   * 이메일
   * @example "konkuk@gmail.com"
   */
  email: string;
}

export interface CodeCheckRequestDTO {
  /**
   * 이메일
   * @example "konkuk@gmail.com"
   */
  email: string;
  /**
   * 인증 번호(인증 코드)
   * @example "85mNvlC5"
   */
  authCode: string;
}

export interface LoginRequestDTO {
  /**
   * 이메일
   * @example "konkuk@gmail.com"
   */
  email: string;
  /**
   * 비밀번호
   * @example "12345"
   */
  password: string;
}

export interface BaseResponseLoginResponseDTO {
  success?: boolean;
  /**
   * @format int32
   * @example 200
   */
  code?: number;
  /** @example "요청에 성공하였습니다." */
  message?: string;
  data?: LoginResponseDTO;
}

export interface LoginResponseDTO {
  /** 엑세스토큰 */
  accessToken?: string;
  /** 리프레쉬토큰 */
  refreshToken?: string;
}

export interface BaseResponseUserHomePageResponseDTO {
  success?: boolean;
  /**
   * @format int32
   * @example 200
   */
  code?: number;
  /** @example "요청에 성공하였습니다." */
  message?: string;
  data?: UserHomePageResponseDTO;
}

export interface UserHomePagePromiseDTO {
  /**
   * 약속 ID
   * @format int64
   * @example 1
   */
  promiseId?: number;
  /**
   * 약속 장소명
   * @example "스타벅스 건대입구점"
   */
  placeName?: string;
  /**
   * 약속명
   * @example "KUIT 2차 회의"
   */
  promiseName?: string;
  /**
   * 약속 날짜
   * @format date
   */
  promiseDate?: string;
  /**
   * 약속 날짜 요일
   * @example "토"
   */
  promiseDay?: string;
  /**
   * 약속 참여자
   * @example "이지환 외 2명"
   */
  promiseMember?: string;
  /**
   * 약속까지 남은 시간
   * @format int32
   * @example 2
   */
  promiseDday?: number;
}

export interface UserHomePageResponseDTO {
  /**
   * 이름
   * @example "이정연"
   */
  userName?: string;
  /**
   * 약속까지 남은 시간(가장 빠른 약속)
   * @format int32
   * @example 2
   */
  fastestDday?: number;
  promiseDTOs?: UserHomePagePromiseDTO[];
}

export interface BaseResponseUserProfileResponseDTO {
  success?: boolean;
  /**
   * @format int32
   * @example 200
   */
  code?: number;
  /** @example "요청에 성공하였습니다." */
  message?: string;
  data?: UserProfileResponseDTO;
}

export interface UserProfileResponseDTO {
  /**
   * 이름
   * @example "이정연"
   */
  name?: string;
  /**
   * 프로필 사진
   * @example "image"
   */
  profileImage?: string;
}

export interface BaseResponseUserProfileSettingResponseDTO {
  success?: boolean;
  /**
   * @format int32
   * @example 200
   */
  code?: number;
  /** @example "요청에 성공하였습니다." */
  message?: string;
  data?: UserProfileSettingResponseDTO;
}

export interface UserProfileSettingResponseDTO {
  /**
   * 이름
   * @example "이정연"
   */
  userName?: string;
  /**
   * 이메일
   * @example "dlwjddus1112@naver.com"
   */
  email?: string;
  /**
   * 프로필 사진
   * @example "image"
   */
  profileImage?: string;
}

export interface BaseResponseGetSchedulesResponseDTO {
  success?: boolean;
  /**
   * @format int32
   * @example 200
   */
  code?: number;
  /** @example "요청에 성공하였습니다." */
  message?: string;
  data?: GetSchedulesResponseDTO;
}

export interface GetSchedulesResponseDTO {
  /**
   * 유저 프로필 사진
   * @example "image"
   */
  profileImage?: string;
  /**
   * 이름
   * @example "이정연"
   */
  userName?: string;
  /**
   * 이메일
   * @example "dlwjddus1112@naver.com"
   */
  email?: string;
  schedules?: SchedulesDTO[];
}

export interface SchedulesDTO {
  /**
   * 스케줄 ID
   * @format int64
   * @example 1
   */
  scheduleId?: number;
  /**
   * 일정명
   * @example "수업"
   */
  scheduleName?: string;
  /**
   * 요일
   * @example "1"
   */
  dayOfWeek?: '0' | '1' | '2' | '3' | '4' | '5' | '6';
  /** 종료 시간 */
  startTime?: LocalTime;
  /** 종료 시간 */
  endTime?: LocalTime;
}

export interface BaseResponseListSchedulesDTO {
  success?: boolean;
  /**
   * @format int32
   * @example 200
   */
  code?: number;
  /** @example "요청에 성공하였습니다." */
  message?: string;
  data?: SchedulesDTO[];
}

export interface BaseResponsePromiseStatusVotingPromiseResponseDTO {
  success?: boolean;
  /**
   * @format int32
   * @example 200
   */
  code?: number;
  /** @example "요청에 성공하였습니다." */
  message?: string;
  data?: PromiseStatusVotingPromiseResponseDTO;
}

/** 약속에 참여한 유저들의 투표 여부 관련 정보 */
export interface PromiseMemberVoteStateDTO {
  /**
   * 투표에 참여했는지 여부
   * @example true
   */
  hasVoted?: boolean;
  /**
   * 약속 제안자 여부
   * @example true
   */
  isHost?: boolean;
  /**
   * 프로필 이미지
   * @example "DOG"
   */
  profileImage?: string;
}

export interface PromiseStatusVotingPromiseResponseDTO {
  /**
   * 약속 이름
   * @example "KUIT BARO 2차 회의"
   */
  promiseName?: string;
  /**
   * 투표를 종료할 수 있는지 여부
   * @example true
   */
  canCloseVoting?: boolean;
  /** 약속에 참여한 유저들의 투표 여부 관련 정보 */
  promiseMemberVoteStateDTO?: PromiseMemberVoteStateDTO[];
}

export interface BaseResponseHasVotedResponseDTO {
  success?: boolean;
  /**
   * @format int32
   * @example 200
   */
  code?: number;
  /** @example "요청에 성공하였습니다." */
  message?: string;
  data?: HasVotedResponseDTO;
}

export interface HasVotedResponseDTO {
  /**
   * 투표를 완료했는지 여부
   * @example true
   */
  hasVoted?: boolean;
}

export interface BaseResponsePromiseVoteRemainingTimeResponseDTO {
  success?: boolean;
  /**
   * @format int32
   * @example 200
   */
  code?: number;
  /** @example "요청에 성공하였습니다." */
  message?: string;
  data?: PromiseVoteRemainingTimeResponseDTO;
}

export interface PromiseVoteRemainingTimeResponseDTO {
  /**
   * 투표 잔여 시간
   * @example "D-3 OR 1시간 1분 10초"
   */
  promiseVoteRemainingTime?: string;
}

export interface BaseResponseVoteCandidateListResponseDTO {
  success?: boolean;
  /**
   * @format int32
   * @example 200
   */
  code?: number;
  /** @example "요청에 성공하였습니다." */
  message?: string;
  data?: VoteCandidateListResponseDTO;
}

/** 투표 모록 - 약속 후보 장소 리스트 */
export interface CandidatePlacesDTO {
  /**
   * 약속 후보 장소 ID
   * @format int64
   * @example 1
   */
  promiseCandidatePlaceId?: number;
  /**
   * 약속 후보 장소 이름
   * @example "탐앤탐스 건대입구점"
   */
  placeName?: string;
  /**
   * 기존에 해당 약속 후보 장소에 대해 투표했는지 여부
   * @example true
   */
  isSelected?: boolean;
}

/** 투표 목록 - 약속 후보 시간 리스트 */
export interface CandidateTimesDTO {
  /**
   * 약속 후보 시간 ID
   * @format int64
   * @example 1
   */
  promiseCandidateTimeId?: number;
  /**
   * 약속 후보 시간 - 날짜 정보
   * @example "2025년 1월 2일"
   */
  date?: string;
  /**
   * 약속 후보 시간 - 시간 정보
   * @example "14:00"
   */
  time?: string;
  /**
   * 기존에 해당 약속 후보 시간에 대해 투표했는지 여부
   * @example true
   */
  isSelected?: boolean;
}

export interface VoteCandidateListResponseDTO {
  /** 투표 목록 - 약속 후보 시간 리스트 */
  candidateTimes?: CandidateTimesDTO[];
  /** 투표 모록 - 약속 후보 장소 리스트 */
  candidatePlaces?: CandidatePlacesDTO[];
}

export interface BaseResponsePromiseAvailableTimeResponseDTO {
  success?: boolean;
  /**
   * @format int32
   * @example 200
   */
  code?: number;
  /** @example "요청에 성공하였습니다." */
  message?: string;
  data?: PromiseAvailableTimeResponseDTO;
}

export interface PromiseAvailableTimeResponseDTO {
  /**
   * 호스트가 제안한 약속 시작 날짜
   * @format date
   */
  suggestedStartDate?: string;
  /**
   * 호스트가 제안한 약속 종료 날짜
   * @format date
   */
  suggestedEndDate?: string;
  /** 약속 참여자들 프로필 */
  promiseMembers?: PromiseMemberDTO[];
  /** 약속 참여자들이 선택한 시간대 */
  promiseAvailableTimes?: PromiseMemberAvailableTimeDTO[];
}

/** 약속 참여자들이 선택한 시간대 */
export interface PromiseMemberAvailableTimeDTO {
  /**
   * 약속 참여자 ID
   * @format int64
   * @example 1
   */
  promiseMemberId?: number;
  availableTimes?: TimeDTO[];
}

/** 약속 참여자들 프로필 */
export interface PromiseMemberDTO {
  /**
   * 유저 ID
   * @format int64
   * @example 1
   */
  userId?: number;
  /**
   * 유저 프로필 사진
   * @example "image"
   */
  profileImage?: string;
}

export interface BaseResponsePromiseSuggestRemainingTimeResponseDTO {
  success?: boolean;
  /**
   * @format int32
   * @example 200
   */
  code?: number;
  /** @example "요청에 성공하였습니다." */
  message?: string;
  data?: PromiseSuggestRemainingTimeResponseDTO;
}

export interface PromiseSuggestRemainingTimeResponseDTO {
  /**
   * 약속 제안 잔여 시간
   * @example "D-3 OR 1시간 1분 10초"
   */
  promiseSuggestRemainingTime?: string;
}

export interface BaseResponsePromiseStatusResponseDTO {
  success?: boolean;
  /**
   * @format int32
   * @example 200
   */
  code?: number;
  /** @example "요청에 성공하였습니다." */
  message?: string;
  data?: PromiseStatusResponseDTO;
}

export interface PromiseStatusResponseDTO {
  /**
   * 약속 상태
   * @example "PENDING"
   */
  promiseStatus?: string;
  /**
   * 약속 제안자 여부
   * @example true
   */
  isHost?: boolean;
}

export interface BaseResponsePromisePlaceResponseDTO {
  success?: boolean;
  /**
   * @format int32
   * @example 200
   */
  code?: number;
  /** @example "요청에 성공하였습니다." */
  message?: string;
  data?: PromisePlaceResponseDTO;
}

/** 중심좌표 기준 2km 내에 등록된 장소 */
export interface PlaceSearchResponseDTO {
  /**
   * 장소 ID
   * @format int64
   * @example 1
   */
  placeId?: number;
  /**
   * 위도
   * @format double
   * @example 37.5423265
   */
  latitude?: number;
  /**
   * 경도
   * @format double
   * @example 127.0759204
   */
  longitude?: number;
}

export interface PromisePlaceResponseDTO {
  /**
   * 호스트가 제안한 지역
   * @example "건대입구"
   */
  suggestedRegion?: string;
  /** 중심좌표 기준 2km 내에 등록된 장소 */
  places?: PlaceSearchResponseDTO[];
  /** 약속 참여자의 프로필 */
  members?: PromiseMemberDTO[];
}

export interface BaseResponsePendingPromiseResponseDTO {
  success?: boolean;
  /**
   * @format int32
   * @example 200
   */
  code?: number;
  /** @example "요청에 성공하였습니다." */
  message?: string;
  data?: PendingPromiseResponseDTO;
}

export interface PendingPromiseResponseDTO {
  /**
   * 약속 이름
   * @example "KUIT BARO 2차 회의"
   */
  promiseName?: string;
  /**
   * 투표를 시작할 준비가 되었는지 여부
   * @example true
   */
  isVotingReady?: boolean;
  /** 약속에 참여한 유저들의 정보 */
  promiseMemberSuggestStates?: PromiseMemberSuggestStateDTO[];
}

/** 약속에 참여한 유저들의 정보 */
export interface PromiseMemberSuggestStateDTO {
  /**
   * 제안을 얼만큼 수행했는지 여부
   * @example "COMPLETE"
   */
  suggestionProgress?: string;
  /**
   * 약속 제안자 여부
   * @example true
   */
  isHost?: boolean;
  /**
   * 프로필 이미지
   * @example "DOG"
   */
  profileImage?: string;
}

export interface BaseResponsePromiseStatusConfirmedPromiseResponseDTO {
  success?: boolean;
  /**
   * @format int32
   * @example 200
   */
  code?: number;
  /** @example "요청에 성공하였습니다." */
  message?: string;
  data?: PromiseStatusConfirmedPromiseResponseDTO;
}

export interface PromiseStatusConfirmedPromiseResponseDTO {
  /**
   * 약속 이름
   * @example "KUIT BARO 2차 회의"
   */
  promiseName?: string;
  /**
   * 약속 확정 장소 이름
   * @example "건대입구역"
   */
  confirmedPlace?: string;
  /**
   * 약속 확정 날짜
   * @example "3/14(금) 3시"
   */
  confirmedDate?: string;
  /**
   * 위도
   * @format double
   * @example 37.566545
   */
  latitude?: number;
  /**
   * 경도
   * @format double
   * @example 126.978078
   */
  longitude?: number;
}

export interface BaseResponsePromiseManagementResponseDTO {
  success?: boolean;
  /**
   * @format int32
   * @example 200
   */
  code?: number;
  /** @example "요청에 성공하였습니다." */
  message?: string;
  data?: PromiseManagementResponseDTO;
}

/** 확정된 약속들 */
export interface ConfirmedPromiseResponseDTO {
  /**
   * 약속 ID
   * @format int64
   * @example 1
   */
  promiseId?: number;
  /**
   * 약속명
   * @example "BARO 회의"
   */
  promiseName?: string;
  /**
   * 확정 인원 이름
   * @example "김상균, 이정연, 신종윤"
   */
  promiseMembersNames?: string[];
  /**
   * 약속 확정된 장소명
   * @example "건대입구역"
   */
  placeName?: string;
  /**
   * 약속 확정된 날짜
   * @format date
   * @example "2025-01-01"
   */
  fixedDate?: string;
}

export interface PromiseManagementResponseDTO {
  /** 제안된 약속들 */
  suggestedPromises?: SuggestedPromiseResponseDTO[];
  /** 투표중인 약속들 */
  votingPromises?: VotingPromiseResponseDTO[];
  /** 확정된 약속들 */
  confirmedPromises?: ConfirmedPromiseResponseDTO[];
}

/** 제안된 약속들 */
export interface SuggestedPromiseResponseDTO {
  /**
   * 약속 ID
   * @format int64
   * @example 1
   */
  promiseId?: number;
  /**
   * 약속명
   * @example "BARO 회의"
   */
  promiseName?: string;
  /**
   * 투표까지의 기한
   * @format int32
   * @example 3
   */
  untilVoteDate?: number;
  /**
   * 약속 제안된 지역
   * @example "건대입구 주변"
   */
  suggestedRegion?: string;
  /**
   * 약속 제안된 시작 날짜
   * @format date
   * @example "2025-01-01"
   */
  suggestedStartDate?: string;
  /**
   * 약속 제안된 끝 날짜
   * @format date
   * @example "2025-01-02"
   */
  suggestedEndDate?: string;
}

/** 투표중인 약속들 */
export interface VotingPromiseResponseDTO {
  /**
   * 약속 ID
   * @format int64
   * @example 1
   */
  promiseId?: number;
  /**
   * 약속명
   * @example "BARO 회의"
   */
  promiseName?: string;
  /**
   * 투표종료까지의 기한
   * @format int32
   * @example 3
   */
  untilVoteEndDate?: number;
  /**
   * 약속 제안된 지역
   * @example "건대입구 주변"
   */
  suggestedRegion?: string;
  /**
   * 약속 제안된 시작 날짜
   * @format date
   * @example "2025-01-01"
   */
  suggestedStartDate?: string;
  /** @format date */
  suggestedEndDate?: string;
}

export interface BaseResponseListPlaceSearchResponseDTO {
  success?: boolean;
  /**
   * @format int32
   * @example 200
   */
  code?: number;
  /** @example "요청에 성공하였습니다." */
  message?: string;
  data?: PlaceSearchResponseDTO[];
}

export interface BaseResponsePlaceSummaryInfoResponseDTO {
  success?: boolean;
  /**
   * @format int32
   * @example 200
   */
  code?: number;
  /** @example "요청에 성공하였습니다." */
  message?: string;
  data?: PlaceSummaryInfoResponseDTO;
}

export interface PlaceSummaryInfoResponseDTO {
  /**
   * 장소명
   * @example "서울상상나라"
   */
  placeName?: string;
  /**
   * 별점
   * @format double
   * @example 3
   */
  star?: number;
  /**
   * 핀 개수
   * @format int32
   * @example 12
   */
  pinCount?: number;
  /**
   * 주소
   * @example "서울 광진구 화양동 5-47"
   */
  placeAddress?: string;
  /**
   * 장소 카테고리 이름
   * @example ["카페","레스토랑","공원"]
   */
  placeCategories?: string[];
}

export interface BaseResponseListPinListResponseDTO {
  success?: boolean;
  /**
   * @format int32
   * @example 200
   */
  code?: number;
  /** @example "요청에 성공하였습니다." */
  message?: string;
  data?: PinListResponseDTO[];
}

export interface PinListResponseDTO {
  /**
   * 핀 Id
   * @format int64
   * @example 1
   */
  pinId?: number;
  /**
   * 핀을 작성한 유저의 이름
   * @example "이지환"
   */
  username?: string;
  /**
   * 장소명
   * @example "스타벅스 건국대점"
   */
  placeName?: string;
  /**
   * 주소
   * @example "서울 광진구 화양동 120-1"
   */
  placeAddress?: string;
  /**
   * 핀에 등록되어있는 카테고리들
   * @example "핀 카테고리"
   */
  pinCategories?: string[];
}

export interface BaseResponsePinResponseDTO {
  success?: boolean;
  /**
   * @format int32
   * @example 200
   */
  code?: number;
  /** @example "요청에 성공하였습니다." */
  message?: string;
  data?: PinResponseDTO;
}

export interface PinResponseDTO {
  /**
   * 사용자 이름
   * @example "홍길동"
   */
  userName?: string;
  /**
   * 사용자 이메일
   * @example "hong@example.com"
   */
  userEmail?: string;
  /**
   * 사용자 프로필 이미지 URL
   * @example "https://example.com/profile.jpg"
   */
  profileImage?: string;
  /**
   * 리뷰 내용
   * @example "아주 좋은 장소였습니다."
   */
  review?: string;
  /**
   * 평점
   * @format int32
   */
  score?: number;
  /**
   * 장소 이름
   * @example "스타벅스 강남점"
   */
  placeName?: string;
}

export interface BaseResponsePinPageResponseDTO {
  success?: boolean;
  /**
   * @format int32
   * @example 200
   */
  code?: number;
  /** @example "요청에 성공하였습니다." */
  message?: string;
  data?: PinPageResponseDTO;
}

export interface CategoryDTO {
  /**
   * 카테고리 ID
   * @format int64
   * @example 1
   */
  categoryId?: number;
  /**
   * 카테고리 이름
   * @example "비즈니스"
   */
  categoryName?: string;
}

export interface PinPageResponseDTO {
  categoryDTOs?: CategoryDTO[];
}

export type SignupData = BaseResponseVoid;

export type GetProfileData = BaseResponseUserProfileResponseDTO;

export type UpdateProfileData = BaseResponseVoid;

export type UpdatePasswordData = BaseResponseVoid;

export type GetSchedulesData = BaseResponseGetSchedulesResponseDTO;

export type AddScheduleData = BaseResponseVoid;

export type SuggestPromiseData = BaseResponseVoid;

export type VoteData = BaseResponseVoid;

export type GetPromiseAvailableTimeData = BaseResponsePromiseAvailableTimeResponseDTO;

export type GetPromiseAvailableTimeError = BaseErrorResponse;

export type SetPromiseAvailableTimeData = BaseResponseVoid;

export type GetSuggestedPlaceData = BaseResponsePromisePlaceResponseDTO;

export type SetSuggestedPlacesData = BaseResponseVoid;

export type InitVoteData = BaseResponseVoid;

export type CloseVoteData = BaseResponseVoid;

export type RegisterPinData = BaseResponseVoid;

export type ReissueTokensData = BaseResponseVoid;

export type SendAuthCodeMailData = BaseResponseVoid;

export type SendAuthCodeMailError = BaseErrorResponse;

export type CheckAuthCodeData = BaseResponseVoid;

export type CheckAuthCodeError = BaseErrorResponse;

export type LoginData = BaseResponseLoginResponseDTO;

export type DeleteScheduleData = BaseResponseVoid;

export type DeleteScheduleError = BaseErrorResponse;

export type UpdateScheduleData = BaseResponseVoid;

export type LogoutData = BaseResponseVoid;

export type GetHomePageData = BaseResponseUserHomePageResponseDTO;

export type DeleteData = BaseResponseVoid;

export type GetProfileSettingData = BaseResponseUserProfileSettingResponseDTO;

export type GetPromiseMemberSchedulesData = BaseResponseListSchedulesDTO;

export type GetPromiseMemberSchedulesError = BaseErrorResponse;

export type GetVotingPromiseData = BaseResponsePromiseStatusVotingPromiseResponseDTO;

export type GetHasVotedData = BaseResponseHasVotedResponseDTO;

export type GetPromiseVoteRemainingTimeResponseData =
  BaseResponsePromiseVoteRemainingTimeResponseDTO;

export type GetVoteCandidateListData = BaseResponseVoteCandidateListResponseDTO;

export type GetPromiseSuggestRemainingTimeResponseData =
  BaseResponsePromiseSuggestRemainingTimeResponseDTO;

export type GetPromiseStatusData = BaseResponsePromiseStatusResponseDTO;

export type GetPendingPromiseData = BaseResponsePendingPromiseResponseDTO;

export type GetConfirmedPromiseResponseData = BaseResponsePromiseStatusConfirmedPromiseResponseDTO;

export type GetPromiseManagementPageData = BaseResponsePromiseManagementResponseDTO;

export type GetCategoryPlacesData = BaseResponseListPlaceSearchResponseDTO;

export type PlaceSearchData = BaseResponseListPlaceSearchResponseDTO;

export type PlaceSummaryInfoData = BaseResponsePlaceSummaryInfoResponseDTO;

export type PlacePinListData = BaseResponseListPinListResponseDTO;

export type GetPinData = BaseResponsePinResponseDTO;

export type GetPinPageData = BaseResponsePinPageResponseDTO;

export type GetPinPageError = BaseErrorResponse;

export type TestData = BaseResponseVoid;

export type TestError = BaseErrorResponse;

export type ErrorTestData = BaseResponseVoid;

export type ErrorTestError = BaseErrorResponse;
