<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: google/ads/googleads/v9/enums/value_rule_operation.proto

namespace GPBMetadata\Google\Ads\GoogleAds\V9\Enums;

class ValueRuleOperation
{
    public static $is_initialized = false;

    public static function initOnce() {
        $pool = \Google\Protobuf\Internal\DescriptorPool::getGeneratedPool();
        if (static::$is_initialized == true) {
          return;
        }
        \GPBMetadata\Google\Api\Http::initOnce();
        \GPBMetadata\Google\Api\Annotations::initOnce();
        $pool->internalAddGeneratedFile(
            '
�
8google/ads/googleads/v9/enums/value_rule_operation.protogoogle.ads.googleads.v9.enums"l
ValueRuleOperationEnum"R
ValueRuleOperation
UNSPECIFIED 
UNKNOWN
ADD
MULTIPLY
SETB�
!com.google.ads.googleads.v9.enumsBValueRuleOperationProtoPZBgoogle.golang.org/genproto/googleapis/ads/googleads/v9/enums;enums�GAA�Google.Ads.GoogleAds.V9.Enums�Google\\Ads\\GoogleAds\\V9\\Enums�!Google::Ads::GoogleAds::V9::Enumsbproto3'
        , true);
        static::$is_initialized = true;
    }
}

