import type { ColumnType } from "kysely";
export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export type friends = {
    friend_id: number;
    member_id: number;
    created_at: Timestamp;
    deleted_at: Timestamp | null;
    updated_at: Timestamp | null;
};
export type game = {
    distance: Generated<string>;
    game_id: Generated<number>;
    time_limit: number;
    created_at: Timestamp;
    deleted_at: Timestamp | null;
    start_time: Timestamp | null;
    updated_at: Timestamp | null;
    progress_status: Generated<string>;
    type: Generated<string>;
};
export type game_player = {
    avg_speed: Generated<string>;
    distance: Generated<string>;
    game_id: number;
    max_speed: Generated<string>;
    member_id: number;
    created_at: Timestamp;
    deleted_at: Timestamp | null;
    updated_at: Timestamp | null;
    finished_time: string | null;
    player_status: Generated<string>;
    result_status: Generated<string>;
};
export type geo_coordinates = {
    distance: Generated<string>;
    game_id: number;
    latitude: Generated<string>;
    longitude: Generated<string>;
    member_id: number;
    created_at: Timestamp;
    deleted_at: Timestamp | null;
    updated_at: Timestamp | null;
    time: string;
};
export type member = {
    member_id: Generated<number>;
    created_at: Timestamp;
    deleted_at: Timestamp | null;
    last_active_at: Generated<Timestamp>;
    updated_at: Timestamp | null;
    member_code: string;
    nickname: string;
    profile_image_url: string;
    social_id: string;
    member_status: Generated<string>;
    social_provider: string;
};
export type member_fcm_token = {
    member_id: number;
    created_at: Timestamp;
    deleted_at: Timestamp | null;
    updated_at: Timestamp | null;
    token: string;
};
export type member_report = {
    reported_member_id: number | null;
    reporter_id: number | null;
    created_at: Timestamp;
    deleted_at: Timestamp | null;
    report_id: Generated<number>;
    updated_at: Timestamp | null;
};
export type member_term = {
    is_agree: Generated<number>;
    member_id: number;
    term_id: number;
    created_at: Timestamp;
    deleted_at: Timestamp | null;
    updated_at: Timestamp | null;
};
export type term = {
    is_active: Generated<number>;
    required: Generated<number>;
    term_id: Generated<number>;
    created_at: Timestamp;
    deleted_at: Timestamp | null;
    updated_at: Timestamp | null;
    description: string | null;
    term_url: string | null;
    term_type: string;
};
export type DB = {
    friends: friends;
    game: game;
    game_player: game_player;
    geo_coordinates: geo_coordinates;
    member: member;
    member_fcm_token: member_fcm_token;
    member_report: member_report;
    member_term: member_term;
    term: term;
};
