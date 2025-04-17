'use strict';

/**
 * review-post service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::review-post.review-post');
