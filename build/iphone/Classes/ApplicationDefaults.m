/**
* Appcelerator Titanium Mobile
* This is generated code. Do not modify. Your changes *will* be lost.
* Generated code is Copyright (c) 2009-2011 by Appcelerator, Inc.
* All Rights Reserved.
*/
#import <Foundation/Foundation.h>
#import "TiUtils.h"
#import "ApplicationDefaults.h"
 
@implementation ApplicationDefaults
  
+ (NSMutableDictionary*) copyDefaults
{
    NSMutableDictionary * _property = [[NSMutableDictionary alloc] init];

    [_property setObject:[TiUtils stringValue:@"R4tkuo6geHTYuxaQmhwZysD8HusDHp9T"] forKey:@"acs-oauth-secret-production"];
    [_property setObject:[TiUtils stringValue:@"yBd8k8Ba4tyQv6Den7enoHsHDDv2YJxB"] forKey:@"acs-oauth-key-production"];
    [_property setObject:[TiUtils stringValue:@"yZGv8Ut0drT4KK0vWPAM8EOyk1qGyxAw"] forKey:@"acs-api-key-production"];
    [_property setObject:[TiUtils stringValue:@"xVGK7I7hRLmCUhlurpO5N7Tggi5HsgYn"] forKey:@"acs-oauth-secret-development"];
    [_property setObject:[TiUtils stringValue:@"76YvljcJ1DCfZvsuZJTlXdONigRJUZKj"] forKey:@"acs-oauth-key-development"];
    [_property setObject:[TiUtils stringValue:@"nNTr6R1TxNUtVQLIruRP6Tz6PnRMpjkh"] forKey:@"acs-api-key-development"];
    [_property setObject:[TiUtils stringValue:@"system"] forKey:@"ti.ui.defaultunit"];

    return _property;
}
@end
