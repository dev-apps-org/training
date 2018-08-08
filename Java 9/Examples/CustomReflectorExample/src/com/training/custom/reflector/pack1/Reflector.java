/**
 * 
 */
package com.training.custom.reflector.pack1;

import java.lang.reflect.Field;
import java.util.HashMap;
import java.util.Map;

/**
 * @author Admin
 *
 */
public class Reflector {

	public static Map<String, Object> getProperties(Object object)
			throws IllegalArgumentException, IllegalAccessException {

		Class<?> theClass = object.getClass();
		Field[] fields = theClass.getDeclaredFields();
		Map<String, Object> fieldsMap = new HashMap<>();
		for (Field field : fields) {
			field.setAccessible(true);
			Object obj = field.get(object);
			fieldsMap.put(field.getName(), obj);
		}
		return fieldsMap;
	}
}