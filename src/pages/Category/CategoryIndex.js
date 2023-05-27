import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Icon from "../../Shared/Icon";
import Layout from "../../Shared/Layout";

const CategoryIndex = () => {
	const [data, setData] = useState([]);
	const [values, setValues] = useState({
		search: ''
	});
	const ACCESS_TOKEN = JSON.parse(localStorage.getItem('access_token'));
	const getCategories = async () => {
		const res = await axios.get(
			"http://127.0.0.1:8000/api/categories", {
			headers: {
				Authorization: `Bearer ${ACCESS_TOKEN.token}`
			}
		}
		);
		setData(res.data)
	};
	const handleClick = () => {
		const res = axios.get(
			"http://127.0.0.1:8000/api/categories", {
			headers: { Authorization: `Bearer ${ACCESS_TOKEN.token}` },
			params: {
				search: values.search
			}
		}
		).then((res2) => {
			setData(res2.data)
		});
	}
	useEffect(() => {
		getCategories();
	}, []);

	function handleChange(e) {
		const key = e.target.name;
		const value = e.target.value;

		setValues(values => ({
			...values,
			[key]: value
		}));
	}

	function reset() {
		getCategories();
		setValues({
			search: ''
		});
	}
	return (
		<Layout>
			<div className="max-w-3xl">
				<Helmet title={data?.modelName} />
				<ToastContainer />
				<h1 className="mb-8 font-bold text-3xl">{data?.modelName}</h1>
				<div className="mb-6 flex justify-between items-center">
					<div className="flex items-center w-full max-w-md mr-4">
						<div className="relative flex w-full bg-white rounded shadow">
							<input
								className="relative w-full px-6 py-3 rounded-r focus:outline-none focus:ring-2 focus:ring-indigo-400"
								autoComplete="off"
								type="text"
								name="search"
								value={values.search}
								onChange={handleChange}
								placeholder="Search…"
							/>
						</div>
						<button
							onClick={reset}
							className="ml-3 text-sm text-gray-600 hover:text-gray-700 focus:text-indigo-700 focus:outline-none"
							type="button"
						>
							Reset
						</button>
						<button
							onClick={handleClick}
							className="btn-primary ml-3 text-sm text-gray-600 hover:text-gray-700 focus:text-indigo-700 focus:outline-none"
							type="button"
						>
							search
						</button>
					</div>
					<Link className="btn-primary" to="/categories/create">
						<span>Create</span>
						<span className="hidden md:inline"> New</span>
					</Link>
				</div>
				<div className="bg-white rounded shadow overflow-x-auto">
					<table className="w-full whitespace-no-wrap">
						<thead>
							<tr className="text-left font-bold">
								<th className="px-6 pt-5 pb-4">Sl</th>
								<th className="px-6 pt-5 pb-4">Name</th>
								<th className="px-6 pt-5 pb-4">Status</th>
							</tr>
						</thead>
						<tbody>
							{data?.data?.map(({ id, sl, name, status }) => {
								return (
									<React.Fragment key={id}>
										<tr className="hover:bg-gray-100 focus-within:bg-gray-100">
											<td className="border-t">
												<Link to={`/categories/${id}`} className="px-6 py-4 flex items-center focus:text-secondary">
													{sl}
												</Link>
											</td>
											<td className="border-t">
												<Link to={`/categories/${id}`} className="px-6 py-4 flex items-center focus:text-secondary">
													{name}
												</Link>
											</td>
											<td className="border-t">
												<Link to={`/categories/${id}`} className="px-6 py-4 flex items-center focus:text-secondary">
													{status}
												</Link>
											</td>


											<td className="border-t w-px">
												<Link tabIndex="-1" to={`/categories/${id}`} className="px-4 flex items-center">
													<Icon name="cheveron-right" className="block w-6 h-6 text-gray-400 fill-current" />
												</Link>
											</td>
										</tr>
									</React.Fragment>
								);
							})}
							{data?.data?.length === 0 && (
								<tr>
									<td className="border-t px-6 py-4" colSpan="4">
										No items found.
									</td>
								</tr>
							)}
						</tbody>
					</table>
				</div>
				{/* <Pagination links={links} /> */}
			</div>
		</Layout>
	);
};
export default CategoryIndex;