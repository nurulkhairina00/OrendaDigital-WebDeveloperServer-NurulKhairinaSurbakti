--
-- PostgreSQL database dump
--

-- Dumped from database version 16.0
-- Dumped by pg_dump version 16.0

-- Started on 2024-01-05 19:33:24

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 4871 (class 1262 OID 24668)
-- Name: orenda; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE orenda WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_Indonesia.1252';


ALTER DATABASE orenda OWNER TO postgres;

\connect orenda

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 4 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: pg_database_owner
--

CREATE SCHEMA public;


ALTER SCHEMA public OWNER TO pg_database_owner;

--
-- TOC entry 4872 (class 0 OID 0)
-- Dependencies: 4
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: pg_database_owner
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 216 (class 1259 OID 32861)
-- Name: customers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.customers (
    id integer NOT NULL,
    name character varying(255),
    phone character varying(255),
    email character varying(255),
    address character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.customers OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 32860)
-- Name: customers_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.customers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.customers_id_seq OWNER TO postgres;

--
-- TOC entry 4873 (class 0 OID 0)
-- Dependencies: 215
-- Name: customers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.customers_id_seq OWNED BY public.customers.id;


--
-- TOC entry 222 (class 1259 OID 32910)
-- Name: orderDtls; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."orderDtls" (
    id integer NOT NULL,
    "orderMst_id" integer,
    product_id integer,
    satuan integer,
    discount character varying(255),
    total integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."orderDtls" OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 32909)
-- Name: orderDtls_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."orderDtls_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."orderDtls_id_seq" OWNER TO postgres;

--
-- TOC entry 4874 (class 0 OID 0)
-- Dependencies: 221
-- Name: orderDtls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."orderDtls_id_seq" OWNED BY public."orderDtls".id;


--
-- TOC entry 220 (class 1259 OID 32903)
-- Name: orderMsts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."orderMsts" (
    id integer NOT NULL,
    customer_id integer,
    grand_total integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."orderMsts" OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 32902)
-- Name: orderMsts_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."orderMsts_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."orderMsts_id_seq" OWNER TO postgres;

--
-- TOC entry 4875 (class 0 OID 0)
-- Dependencies: 219
-- Name: orderMsts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."orderMsts_id_seq" OWNED BY public."orderMsts".id;


--
-- TOC entry 218 (class 1259 OID 32870)
-- Name: products; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products (
    id integer NOT NULL,
    name character varying(255),
    unit integer,
    price integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.products OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 32869)
-- Name: products_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.products_id_seq OWNER TO postgres;

--
-- TOC entry 4876 (class 0 OID 0)
-- Dependencies: 217
-- Name: products_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;


--
-- TOC entry 4703 (class 2604 OID 32864)
-- Name: customers id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customers ALTER COLUMN id SET DEFAULT nextval('public.customers_id_seq'::regclass);


--
-- TOC entry 4706 (class 2604 OID 32913)
-- Name: orderDtls id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."orderDtls" ALTER COLUMN id SET DEFAULT nextval('public."orderDtls_id_seq"'::regclass);


--
-- TOC entry 4705 (class 2604 OID 32906)
-- Name: orderMsts id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."orderMsts" ALTER COLUMN id SET DEFAULT nextval('public."orderMsts_id_seq"'::regclass);


--
-- TOC entry 4704 (class 2604 OID 32873)
-- Name: products id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);


--
-- TOC entry 4859 (class 0 OID 32861)
-- Dependencies: 216
-- Data for Name: customers; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.customers VALUES (2, 'Nurul Khairina', '+62823456789', 'nurulkhairina00@gmail.com', 'Jl. Umban sari no.10', '2024-01-05 19:31:39.884+07', '2024-01-05 19:31:39.884+07');
INSERT INTO public.customers VALUES (1, 'Nurul Khairani', '082234730190', 'nurul@gmail.com', 'Jl. Paus no.12', '2024-01-05 11:22:47.637+07', '2024-01-05 19:32:19.772+07');


--
-- TOC entry 4865 (class 0 OID 32910)
-- Dependencies: 222
-- Data for Name: orderDtls; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."orderDtls" VALUES (1, 1, 1, 2, '10', 2700000, '2024-01-05 12:42:42.131+07', '2024-01-05 12:42:42.131+07');
INSERT INTO public."orderDtls" VALUES (2, 1, 2, 3, '20', 12000000, '2024-01-05 12:42:42.131+07', '2024-01-05 12:42:42.131+07');
INSERT INTO public."orderDtls" VALUES (6, 4, 2, 2, '5', 9500000, '2024-01-05 19:32:56.195+07', '2024-01-05 19:32:56.195+07');


--
-- TOC entry 4863 (class 0 OID 32903)
-- Dependencies: 220
-- Data for Name: orderMsts; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."orderMsts" VALUES (1, 1, 14700000, '2024-01-05 12:42:42.123+07', '2024-01-05 12:42:42.123+07');
INSERT INTO public."orderMsts" VALUES (4, 2, 9500000, '2024-01-05 19:32:56.192+07', '2024-01-05 19:32:56.192+07');


--
-- TOC entry 4861 (class 0 OID 32870)
-- Dependencies: 218
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.products VALUES (1, 'AC', 15, 1500000, '2024-01-05 11:25:13.395+07', '2024-01-05 11:25:13.395+07');
INSERT INTO public.products VALUES (2, 'Kulkas', 20, 5000000, '2024-01-05 11:25:33.55+07', '2024-01-05 11:25:33.55+07');
INSERT INTO public.products VALUES (3, 'Televisi', 5, 2000000, '2024-01-05 11:25:51.905+07', '2024-01-05 11:26:04.306+07');


--
-- TOC entry 4877 (class 0 OID 0)
-- Dependencies: 215
-- Name: customers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.customers_id_seq', 2, true);


--
-- TOC entry 4878 (class 0 OID 0)
-- Dependencies: 221
-- Name: orderDtls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."orderDtls_id_seq"', 6, true);


--
-- TOC entry 4879 (class 0 OID 0)
-- Dependencies: 219
-- Name: orderMsts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."orderMsts_id_seq"', 4, true);


--
-- TOC entry 4880 (class 0 OID 0)
-- Dependencies: 217
-- Name: products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.products_id_seq', 3, true);


--
-- TOC entry 4708 (class 2606 OID 32868)
-- Name: customers customers_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customers
    ADD CONSTRAINT customers_pkey PRIMARY KEY (id);


--
-- TOC entry 4714 (class 2606 OID 32915)
-- Name: orderDtls orderDtls_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."orderDtls"
    ADD CONSTRAINT "orderDtls_pkey" PRIMARY KEY (id);


--
-- TOC entry 4712 (class 2606 OID 32908)
-- Name: orderMsts orderMsts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."orderMsts"
    ADD CONSTRAINT "orderMsts_pkey" PRIMARY KEY (id);


--
-- TOC entry 4710 (class 2606 OID 32875)
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);


-- Completed on 2024-01-05 19:33:24

--
-- PostgreSQL database dump complete
--

