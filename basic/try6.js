// SELECT v.id,
// 'video'::text AS module,
// comp.category_id,
// vc.competency_id,
// cc.title AS category,
// comp.title AS competency,
// u.full_name,
// u.posisi,
// u.auth,
// u.nik,
// u.picture,
// v.title,
// v.slug,
// vl.count_like,
// vp.count_play,
// NULL::bigint AS count_enroll,
// 0 AS count_rating,
// 0 AS sum_rating,
// 0 AS rating,
// 0 AS count_content,
// v.level,
// v.is_premium,
// v.is_curated,
// v.created_at,
// v.image_desktop,
// v.image_mobile,
// false AS is_certificate,
// NULL::date AS date_live,
// NULL::time without time zone AS start_time,
// NULL::time without time zone AS end_time,
// v.price,
// NULL::text AS expert,
// v.status,
// v.status_enum,
// v.is_popular,
// v.is_vip,
// v.is_display_home
// FROM video v
//  JOIN users u ON u.id = v.owner_id
//  LEFT JOIN ( SELECT video_like_history.video_id,
//         count(*) AS count_like
//        FROM video_like_history
//       GROUP BY video_like_history.video_id) vl ON vl.video_id = v.id
//  LEFT JOIN ( SELECT video_play_history.video_id,
//         count(*) AS count_play
//        FROM video_play_history
//       GROUP BY video_play_history.video_id) vp ON vp.video_id = v.id
//  LEFT JOIN video_competencies vc ON vc.video_id = v.id
//  LEFT JOIN competencies comp ON vc.competency_id = comp.id
//  LEFT JOIN competency_categories cc ON comp.category_id = cc.id
// WHERE v.status = 9 AND v.privacy::text = 'PUBLIC'::text AND v.is_vip = false AND v.deleted = false AND v.status_enum = 'publish'::text
// UNION
// SELECT w.id,
// 'webinar'::text AS module,
// comp.category_id,
// wc.competency_id,
// cc.title AS category,
// comp.title AS competency,
// u.full_name,
// u.posisi,
// u.auth,
// u.nik,
// u.picture,
// w.title,
// w.slug,
// lh.count_like,
// NULL::bigint AS count_play,
// r.count_enroll,
// 0 AS count_rating,
// 0 AS sum_rating,
// 0 AS rating,
// 0 AS count_content,
// w.level,
// w.is_premium,
// w.is_curated,
// w.created_at,
// w.image_desktop,
// w.image_mobile,
// w.is_certificate,
// w.date_live,
// w.start_time,
// w.end_time,
// w.price,
// (( SELECT array_to_json(array_agg(jsonb_build_object('avatar', b.avatar, 'fullname', b.fullname))) AS array_to_json
//        FROM ( SELECT wu.avatar,
//                 wu.fullname
//                FROM webinar_user wu
//               WHERE wu.webinar_id = w.id AND wu.type = 13) b))::text AS expert,
// w.status,
// w.status_enum,
// NULL::boolean AS is_popular,
// w.is_vip,
// w.is_homepage AS is_display_home
// FROM webinar w
//  JOIN users u ON u.id = w.owner_id
//  LEFT JOIN ( SELECT webinar_like_history.webinar_id,
//         count(*) AS count_like
//        FROM webinar_like_history
//       GROUP BY webinar_like_history.webinar_id) lh ON lh.webinar_id = w.id
//  LEFT JOIN ( SELECT webinar_response.webinar_id,
//         count(*) AS count_enroll
//        FROM webinar_response
//       WHERE webinar_response.is_enroll = true
//       GROUP BY webinar_response.webinar_id) r ON r.webinar_id = w.id
//  LEFT JOIN webinar_competencies wc ON wc.webinar_id = w.id
//  LEFT JOIN competencies comp ON wc.competency_id = comp.id
//  LEFT JOIN competency_categories cc ON comp.category_id = cc.id
// WHERE w.status = 9::numeric AND w.privacy = 10 AND w.is_vip = false
// UNION
// SELECT p.id,
// 'podcast'::text AS module,
// comp.category_id,
// pc.competency_id,
// cc.title AS category,
// comp.title AS competency,
// u.full_name,
// u.posisi,
// u.auth,
// u.nik,
// u.picture,
// p.title,
// p.slug,
// lh.count_like,
// ph.count_play,
// NULL::bigint AS count_enroll,
// 0 AS count_rating,
// 0 AS sum_rating,
// 0 AS rating,
// 0 AS count_content,
// p.level,
// p.is_premium,
// p.is_curated,
// p.created_at,
// p.image_desktop,
// p.image_mobile,
// false AS is_certificate,
// NULL::date AS date_live,
// NULL::time without time zone AS start_time,
// NULL::time without time zone AS end_time,
// p.price,
// NULL::text AS expert,
// p.status,
// p.status_enum,
// p.is_popular,
// p.is_vip,
// p.is_display_home
// FROM podcast p
//  JOIN users u ON u.id = p.owner_id
//  LEFT JOIN ( SELECT podcast_like_history.podcast_id,
//         count(*) AS count_like
//        FROM podcast_like_history
//       GROUP BY podcast_like_history.podcast_id) lh ON lh.podcast_id = p.id
//  LEFT JOIN ( SELECT podcast_play_history.podcast_id,
//         count(*) AS count_play
//        FROM podcast_play_history
//       GROUP BY podcast_play_history.podcast_id) ph ON ph.podcast_id = p.id
//  LEFT JOIN podcast_competencies pc ON pc.podcast_id = p.id
//  LEFT JOIN competencies comp ON pc.competency_id = comp.id
//  LEFT JOIN competency_categories cc ON comp.category_id = cc.id
// WHERE p.status = 9 AND p.privacy::text = 'PUBLIC'::text AND p.is_vip = false
// UNION
// SELECT c.id,
// 'course'::text AS module,
// comp.category_id,
// ccomp.competency_id,
// cc.title AS category,
// comp.title AS competency,
// u.full_name,
// u.posisi,
// u.auth,
// u.nik,
// u.picture,
// c.title,
// c.slug,
// cl.count_like,
// NULL::bigint AS count_play,
// NULL::bigint AS count_enroll,
// cr.count_rating,
// cr.sum_rating,
// round(cr.sum_rating / cr.count_rating::numeric, 2) AS rating,
// cf.count_content,
// c.level,
// c.is_premium,
// c.is_curated,
// c.created_at,
// c.image_desktop,
// c.image_mobile,
// c.is_certificate,
// NULL::date AS date_live,
// NULL::time without time zone AS start_time,
// NULL::time without time zone AS end_time,
// c.price,
// NULL::text AS expert,
// c.status,
// c.status_enum,
// NULL::boolean AS is_popular,
// c.is_vip,
// c.is_homepage AS is_display_home
// FROM course c
//  JOIN users u ON u.id = c.owner_id
//  LEFT JOIN ( SELECT course_like_history.course_id,
//         count(*) AS count_like
//        FROM course_like_history
//       GROUP BY course_like_history.course_id) cl ON cl.course_id = c.id
//  LEFT JOIN ( SELECT course_response.course_id,
//         count(course_response.course_id) AS count_rating,
//         sum(course_response.rating) AS sum_rating
//        FROM course_response
//       WHERE course_response.is_rating = true
//       GROUP BY course_response.course_id) cr ON cr.course_id = c.id
//  LEFT JOIN ( SELECT course_flow.course_id,
//         count(*) AS count_content
//        FROM course_flow
//       GROUP BY course_flow.course_id) cf ON cf.course_id = c.id
//  LEFT JOIN course_competencies ccomp ON ccomp.course_id = c.id
//  LEFT JOIN competencies comp ON ccomp.competency_id = comp.id
//  LEFT JOIN competency_categories cc ON comp.category_id = cc.id
// WHERE c.status = 9 AND c.is_vip = false AND c.privacy = 10
// UNION
// SELECT c.id,
// 'pathway'::text AS module,
// comp.category_id,
// ccomp.competency_id,
// cc.title AS category,
// comp.title AS competency,
// u.full_name,
// u.posisi,
// u.auth,
// u.nik,
// u.picture,
// c.title,
// c.slug,
// cl.count_like,
// NULL::bigint AS count_play,
// ce.count_enroll,
// cr.count_rating,
// cr.sum_rating,
// round(cr.sum_rating / cr.count_rating::numeric, 2) AS rating,
// cf.count_content,
// c.level,
// c.is_premium,
// c.is_curated,
// c.created_at,
// c.image_desktop,
// c.image_mobile,
// c.is_certificate,
// NULL::date AS date_live,
// NULL::time without time zone AS start_time,
// NULL::time without time zone AS end_time,
// c.price,
// NULL::text AS expert,
// c.status,
// c.status_enum,
// NULL::boolean AS is_popular,
// c.is_vip,
// c.is_homepage AS is_display_home
// FROM classroom c
//  JOIN users u ON u.id = c.owner_id
//  LEFT JOIN ( SELECT classroom_like_history.classroom_id,
//         count(classroom_like_history.classroom_id) AS count_like
//        FROM classroom_like_history
//       WHERE classroom_like_history.types = 'like'::text
//       GROUP BY classroom_like_history.classroom_id) cl ON cl.classroom_id = c.id
//  LEFT JOIN ( SELECT classroom_response.classroom_id,
//         count(classroom_response.classroom_id) AS count_enroll
//        FROM classroom_response
//       WHERE classroom_response.is_enroll = true
//       GROUP BY classroom_response.classroom_id) ce ON ce.classroom_id = c.id
//  LEFT JOIN ( SELECT classroom_response.classroom_id,
//         count(classroom_response.classroom_id) AS count_rating,
//         sum(classroom_response.rating) AS sum_rating
//        FROM classroom_response
//       WHERE classroom_response.is_rating = true
//       GROUP BY classroom_response.classroom_id) cr ON cr.classroom_id = c.id
//  LEFT JOIN ( SELECT classroom_flow.classroom_id,
//         count(classroom_flow.classroom_id) AS count_content
//        FROM classroom_flow
//       WHERE classroom_flow.relation_id IS NOT NULL
//       GROUP BY classroom_flow.classroom_id) cf ON cf.classroom_id = c.id
//  LEFT JOIN classroom_competencies ccomp ON ccomp.classroom_id = c.id
//  LEFT JOIN competencies comp ON ccomp.competency_id = comp.id
//  LEFT JOIN competency_categories cc ON comp.category_id = cc.id
// WHERE c.status = 9 AND c.is_vip = false AND c.privacy = 10;
