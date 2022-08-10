/**
 * @description: 获取类型 test
 */

import { getType } from './02get-type'

describe('获取类型', () => {
    it('number', () => {
        expect(getType(1)).toBe('number');
    }),
    it('boolean', () => {
        expect(getType(true)).toBe('boolean');
    }),
    it('null', () => {
        expect(getType(null)).toBe('null');
    }),
    it('undefined', () => {
        expect(getType(undefined)).toBe('undefined');
    }),
    it('object', () => {
        expect(getType({})).toBe('object');
    }),
    it('array', () => {
        expect(getType([])).toBe('array');
    }),
    it('function', () => {
        expect(getType(() => {})).toBe('function');
    }),
    it('date', () => {
        expect(getType(new Date())).toBe('date');
    }),
    it('regexp', () => {
        expect(getType(/a/)).toBe('regexp');
    }),
    it('error', () => {
        expect(getType(new Error())).toBe('error');
    }),
    it('promise', () => {
        expect(getType(Promise.resolve())).toBe('promise');
    }),
    it('symbol', () => {
        expect(getType(Symbol())).toBe('symbol');
    }),
    it('set', () => {
        expect(getType(new Set())).toBe('set');
    }),
    it('map', () => {
        expect(getType(new Map())).toBe('map');
    }),
    it('weakset', () => {
        expect(getType(new WeakSet())).toBe('weakset');
    }),
    it('weakmap', () => {
        expect(getType(new WeakMap())).toBe('weakmap');
    }),
    it('int8array', () => {
        expect(getType(new Int8Array())).toBe('int8array');
    })
})