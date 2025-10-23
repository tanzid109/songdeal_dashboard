/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Upload, Plus, PlusIcon } from "lucide-react";
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { step1Schema } from "./step1Schema";
import { step2Schema } from "./step2Schema";
import { step3Schema } from "./step3Schema";
import { step4Schema } from "./step4Schema";
import { toast } from "sonner";

const genres = [
    "Pop",
    "Rock",
    "Hip Hop",
    "Electronic",
    "Jazz",
    "Classical",
    "Country",
    "R&B",
];
const languages = ["English", "Spanish", "French", "German"];

export default function MultiStepForm() {
    const [currentStep, setCurrentStep] = useState(1);
    const [allFormData, setAllFormData] = useState({});
    // const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
    const [tracks, setTracks] = useState([{ id: 1, title: "", duration: "", isrc: "" }]);
    const [royaltyHolders, setRoyaltyHolders] = useState([
        { id: 1, name: "John Doe", split: 50 },
        { id: 2, name: "Jane Smith", split: 50 },
    ]);

    const schemaMap = [step1Schema, step2Schema, step3Schema, step4Schema];
    const form = useForm({
        resolver: zodResolver(schemaMap[currentStep - 1]),
        defaultValues: {
            catalogTitle: "",
            primaryArtist: "",
            releaseYear: "",
            genre: [],
            language: "English",
            shortDescription: "",
            tracks,
            rightsOwner: "",
            royaltyHolders,
            masterRights: 50,
            publishingRights: 25,
            askingPrice: 10000,
            investmentGoal: 5000,
            listingDuration: 30,
        },
    });

    const { formState, handleSubmit, setValue, } = form;
    const { isSubmitting } = formState;
    const progress = (currentStep / 4) * 100;

    const onSubmit = (data: any) => {
        setAllFormData({ ...allFormData, ...data });
        if (currentStep < 4) {
            setCurrentStep(currentStep + 1);
        } else {
            toast.success("Form submitted successfully!");
            console.log("Complete form data:", { ...allFormData, ...data });
            form.reset();
            setCurrentStep(1);
        }
    };

    const addTrack = () => {
        const newTracks = [...tracks, { id: Date.now(), title: "", duration: "", isrc: "" }];
        setTracks(newTracks);
        setValue("tracks", newTracks);
    };

    const removeTrack = (id: number) => {
        if (tracks.length > 1) {
            const newTracks = tracks.filter((t) => t.id !== id);
            setTracks(newTracks);
            setValue("tracks", newTracks);
        }
    };

    const updateTrack = (id: number, field: string, value: string) => {
        const newTracks = tracks.map((t) => (t.id === id ? { ...t, [field]: value } : t));
        setTracks(newTracks);
        setValue("tracks", newTracks);
    };

    const addRoyaltyHolder = () => {
        const newHolders = [...royaltyHolders, { id: Date.now(), name: "", split: 0 }];
        setRoyaltyHolders(newHolders);
        setValue("royaltyHolders", newHolders);
    };

    const removeRoyaltyHolder = (id: number) => {
        if (royaltyHolders.length > 1) {
            const newHolders = royaltyHolders.filter((h) => h.id !== id);
            setRoyaltyHolders(newHolders);
            setValue("royaltyHolders", newHolders);
        }
    };

    const updateRoyaltyHolder = (id: number, field: string, value: string | number) => {
        const newHolders = royaltyHolders.map((h) =>
            h.id === id ? { ...h, [field]: field === "split" ? Number(value) : value } : h
        );
        setRoyaltyHolders(newHolders);
        setValue("royaltyHolders", newHolders);
    };

    const totalRoyaltySplit = royaltyHolders.reduce((sum, h) => sum + (h.split || 0), 0);

    return (
        <div className="min-h-screen bg-gray-50 md:p-8 mt-5">
            <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-sm p-8">
                {/* Progress bar */}
                <div className="mb-8">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">
                            Step {currentStep}/4
                        </span>
                        <span className="text-sm font-medium text-gray-700">
                            {Math.round(progress)}%
                        </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                            className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>
                <FormProvider {...form}>
                    {/* Form */}
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                        {/* Step 1: Basic Information */}
                        {currentStep === 1 && (
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">Upload New Catalog</h2>
                                <p className="text-gray-600 mb-8">Sitepi Basic information Provide the essential ortaite for your catalog</p>

                                <div className="space-y-6">
                                    {/* Row 1: Catalog Title & Primary Artist */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <FormField
                                            control={form.control}
                                            name="catalogTitle"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Catalog Title</FormLabel>
                                                    <FormControl>
                                                        <Input {...field} placeholder="Enter catalog title" />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="primaryArtist"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Primary Artist</FormLabel>
                                                    <FormControl>
                                                        <Input {...field} placeholder="Enter primary artist" />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    {/* Row 2: Release Year & Genre */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <FormField
                                            control={form.control}
                                            name="releaseYear"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Release Year</FormLabel>
                                                    <FormControl>
                                                        <Input {...field} placeholder="YYYY" />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="genre"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Genre</FormLabel>
                                                    <FormControl>
                                                        <select
                                                            multiple
                                                            className="w-full p-2.5 border border-gray-300 rounded-md shadow-sm bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                                            value={field.value}
                                                            onChange={(e) => {
                                                                const selected = Array.from(e.target.selectedOptions, (option) => option.value);
                                                                field.onChange(selected);
                                                            }}
                                                        >
                                                            {genres.map((genre) => (
                                                                <option key={genre} value={genre}>
                                                                    {genre}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    {/* Row 3: Language */}
                                    <FormField
                                        control={form.control}
                                        name="language"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Language</FormLabel>
                                                <FormControl>
                                                    <select
                                                        {...field}
                                                        className="w-full  p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                                    >
                                                        <option value="">Select a language</option>
                                                        {languages.map((lan) => (
                                                            <option key={lan} value={lan}>
                                                                {lan}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    {/* Row 4: Short Description */}
                                    <FormField
                                        control={form.control}
                                        name="shortDescription"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Short Description</FormLabel>
                                                <FormControl>
                                                    <Textarea
                                                        {...field}
                                                        rows={4}
                                                        className="w-full border border-gray-300 rounded-md p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                                        placeholder="Provide a brief description of your catalog.."
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                            </div>
                        )}

                        {/* Step 2: Add Tracks */}
                        {currentStep === 2 && (
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">Add Your Tracks</h2>
                                <p className="text-gray-600 mb-8">
                                    Provide the essential information for your catalog.
                                </p>

                                <div className="space-y-6">
                                    {tracks.map((track, index) => (
                                        <div key={track.id} className="border border-gray-200 rounded-lg p-6">
                                            <div className="grid md:grid-cols-3 gap-4 mb-4">
                                                {/* Track Title */}
                                                <FormField
                                                    control={form.control}
                                                    name={`tracks.${index}.title`}
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Track Title</FormLabel>
                                                            <FormControl>
                                                                <Input
                                                                    {...field}
                                                                    value={track.title}
                                                                    onChange={(e) =>
                                                                        updateTrack(track.id, "title", e.target.value)
                                                                    }
                                                                    placeholder={index === 0 ? "Midnight Bloom" : ""}
                                                                />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />

                                                {/* Duration */}
                                                <FormField
                                                    control={form.control}
                                                    name={`tracks.${index}.duration`}
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Duration</FormLabel>
                                                            <FormControl>
                                                                <Input
                                                                    {...field}
                                                                    value={track.duration}
                                                                    onChange={(e) =>
                                                                        updateTrack(track.id, "duration", e.target.value)
                                                                    }
                                                                    placeholder={index === 0 ? "03:45" : "MM:SS"}
                                                                />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />

                                                {/* ISRC */}
                                                <FormField
                                                    control={form.control}
                                                    name={`tracks.${index}.isrc`}
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>ISRC</FormLabel>
                                                            <FormControl>
                                                                <Input
                                                                    {...field}
                                                                    value={track.isrc}
                                                                    onChange={(e) =>
                                                                        updateTrack(track.id, "isrc", e.target.value)
                                                                    }
                                                                    placeholder={
                                                                        index === 0 ? "US-S1Z-23-12345" : "XX-XXX-00-00000"
                                                                    }
                                                                />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>

                                            {/* Upload Section */}
                                            <div>
                                                <FormLabel>Upload Sample</FormLabel>
                                                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-indigo-500 transition-colors cursor-pointer mt-3">
                                                    <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                                                    <p className="text-sm text-gray-600">Upload Audio</p>
                                                    <p className="text-xs text-gray-500">
                                                        Please upload square audio, size less than 500MB.
                                                    </p>
                                                </div>
                                            </div>

                                            {tracks.length > 1 && (
                                                <Button
                                                    variant="secondary"
                                                    type="button"
                                                    onClick={() => removeTrack(track.id)}
                                                    className="mt-2"
                                                >
                                                    Remove Track
                                                </Button>
                                            )}
                                        </div>
                                    ))}

                                    {/* Add Button */}
                                    <Button
                                        type="button"
                                        onClick={addTrack}
                                        className="w-full"
                                    >
                                        <PlusIcon className="size-5" /> Add Another Track
                                    </Button>
                                </div>
                            </div>
                        )}

                        {/* Step 3: Rights & Documents */}
                        {currentStep === 3 && (
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-8">Rights & Documents</h2>

                                <div className="space-y-6">

                                    <FormField
                                        control={form.control}
                                        name="rightsOwner"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Rights Owner</FormLabel>
                                                <FormControl>
                                                    <Input {...field}
                                                        placeholder="Enter the name of the rights owner" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <div>
                                        <FormLabel>Royalty Split</FormLabel>
                                        <p className="text-sm text-gray-600 mb-4 my-3">Add royalty holders and their respective percentage splits. The total must not exceed 100%</p>

                                        <div className="md:border md:border-gray-200 md:rounded-lg overflow-hidden">
                                            <div className="overflow-x-auto">
                                                <table className="min-w-full text-sm">
                                                    <thead className="bg-gray-50 hidden md:table-header-group">
                                                        <tr>
                                                            <th className="px-6 py-3 text-left font-medium text-gray-900">Name</th>
                                                            <th className="px-6 py-3 text-left font-medium text-gray-900">
                                                                Royalty Split (%)
                                                            </th>
                                                            <th className="px-6 py-3"></th>
                                                        </tr>
                                                    </thead>

                                                    <tbody className="divide-y divide-gray-200">
                                                        {royaltyHolders.map((holder) => (
                                                            <tr
                                                                key={holder.id}
                                                                className="block md:table-row border md:border-0 rounded-lg md:rounded-none mb-4 md:mb-0 p-4 md:p-0"
                                                            >
                                                                {/* Name */}
                                                                <td className="block md:table-cell px-4 py-2 md:px-6 md:py-4">
                                                                    <div className="md:hidden text-xs text-gray-500 mb-1">Name</div>
                                                                    <Input
                                                                        value={holder.name}
                                                                        onChange={(e) =>
                                                                            updateRoyaltyHolder(holder.id, "name", e.target.value)
                                                                        }
                                                                        placeholder="Enter name"
                                                                    />
                                                                </td>

                                                                {/* Royalty Split */}
                                                                <td className="block md:table-cell px-4 py-2 md:px-6 md:py-4">
                                                                    <div className="md:hidden text-xs text-gray-500 mb-1">
                                                                        Royalty Split (%)
                                                                    </div>
                                                                    <Input
                                                                        type="number"
                                                                        value={holder.split}
                                                                        onChange={(e) =>
                                                                            updateRoyaltyHolder(holder.id, "split", e.target.value)
                                                                        }
                                                                        min="0"
                                                                        max="100"
                                                                    />
                                                                </td>

                                                                {/* Remove Button */}
                                                                <td className="block md:table-cell text-right px-4 py-2 md:px-6 md:py-4">
                                                                    {royaltyHolders.length > 1 && (
                                                                        <button
                                                                            type="button"
                                                                            onClick={() => removeRoyaltyHolder(holder.id)}
                                                                            className="text-red-600 hover:text-red-700 text-sm"
                                                                        >
                                                                            Remove
                                                                        </button>
                                                                    )}
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        {totalRoyaltySplit !== 100 && (
                                            <div className="mt-4 bg-red-50 border border-red-200 rounded-md p-3">
                                                <p className="text-sm text-red-800">Total royalty split cannot exceed 100%. Current total: {totalRoyaltySplit}%</p>
                                            </div>
                                        )}
                                        <FormMessage />

                                        <Button
                                            type="button"
                                            variant="secondary"
                                            onClick={addRoyaltyHolder}
                                            className="mt-3"
                                        >
                                            <Plus className="h-4 w-4" />
                                            Add Another
                                        </Button>
                                    </div>

                                    <div>
                                        <FormLabel>Legal Documents</FormLabel>
                                        <p className="text-sm text-gray-600 mb-4">Upload contracts, proof of ownership, or other relevant legal documents (PDF format)</p>

                                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-indigo-500 transition-colors cursor-pointer">
                                            <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                                            <p className="text-sm text-gray-600 mb-1">Drag & drop your files here, or browse</p>
                                            <p className="text-xs text-gray-500">PDF Files only, up to 100MB</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Step 4: Preview & Submit */}
                        {currentStep === 4 && (
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-8">Preview & Submit</h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* Album Preview */}
                                    <div className="flex flex-col items-center md:items-start">
                                        <div className="bg-black rounded-lg aspect-square w-full max-w-xs flex items-center justify-center mb-4">
                                            <div className="text-center text-white">
                                                <div className="text-6xl mb-4">♪</div>
                                                <p className="text-sm">Album Cover Preview</p>
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 text-center md:text-left">
                                            Album Name:
                                            <span className="ml-2">{String(form.watch('catalogTitle') || 'Untitled')}</span>
                                        </h3>
                                        <p className="text-gray-600 text-center md:text-left">
                                            Artist Name: {String(form.watch('primaryArtist') || 'Unknown')}
                                        </p>
                                    </div>

                                    {/* Tracks & Details */}
                                    <div className="space-y-6">
                                        {/* Tracks */}
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-3">Tracks</h3>
                                            <div className="space-y-2">
                                                {tracks.map((track, index) => (
                                                    <div
                                                        key={track.id}
                                                        className="flex justify-between text-sm bg-gray-50 px-3 py-2 rounded"
                                                    >
                                                        <span className="text-gray-700">{index + 1}. {track.title || 'Untitled'}</span>
                                                        <span className="text-gray-500">{track.duration || '0:00'}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Rights Information */}
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-3">Rights Information</h3>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                <div>
                                                    <p className="text-sm text-gray-600">Master Rights</p>
                                                    <p className="font-semibold text-gray-900">
                                                        ${Number(form.watch('masterRights') || 0).toLocaleString()}%
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="text-sm text-gray-600">Publishing Rights</p>
                                                    <p className="font-semibold text-gray-900">
                                                        ${Number(form.watch('publishingRights') || 0).toLocaleString()}%
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Listing Details */}
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-3">Listing Details</h3>
                                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                                <div>
                                                    <p className="text-sm text-gray-600">Asking Price</p>
                                                    <p className="font-semibold text-gray-900">
                                                        ${form.watch('askingPrice')?.toLocaleString()}
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="text-sm text-gray-600">Investment Goal</p>
                                                    <p className="font-semibold text-gray-900">
                                                        ${form.watch('investmentGoal')?.toLocaleString()}
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="text-sm text-gray-600">Listing Duration</p>
                                                    <p className="font-semibold text-gray-900">
                                                        {Number(form.watch('listingDuration') || 0).toLocaleString()} days
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )}

                        {/* Navigation Buttons */}
                        <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() =>
                                    currentStep > 1 ? setCurrentStep(currentStep - 1) : null
                                }
                                disabled={currentStep === 1}
                                className="disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Back
                            </Button>
                            <Button type="submit" disabled={isSubmitting}>
                                {isSubmitting
                                    ? "Processing..."
                                    : currentStep === 4
                                        ? "Submit for Review"
                                        : "Next"}
                            </Button>
                        </div>
                    </form>
                </FormProvider>
            </div>
        </div>
    );
}
